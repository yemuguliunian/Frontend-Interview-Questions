import { dedent } from 'vtils';
import * as path from 'path';
const fs = require('fs-extra');
import { getTitle } from './utils';

const docsPath = path.join(process.cwd(), 'docs');
const generatorFolder = ['knowledge', 'interview-questions'];
const ignore = ['.vuepress'];

const BASE = '/frontend/';

/**
 * 生成 vuepress 侧边栏配置项
 */
const generatorSidebar = (docPath, folder) => {
    return (function readdir(readPath) {
        const files = fs.readdirSync(readPath);
        return files
            .map((filename) => {
                if (ignore.includes(filename)) {
                    return;
                }
                const fullPath = path.join(readPath, filename);
                const relativePath = path.relative(docPath, fullPath);
                if (relativePath.includes('README.md')) {
                    return;
                }
                const stat = fs.statSync(fullPath);
                if (stat.isFile()) {
                    return `'/${folder}/${relativePath.replace('.md', '').replace('README', '')}'`;
                }
                if (stat.isDirectory()) {
                    return dedent`
                {
                    title: '${filename.replace('_', ' ')}',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        ${readdir(fullPath)}
                    ]
                }
                `;
                }
            })
            .filter((item) => item)
            .join(',\n');
    })(docPath);
};

const writeConfigFile = (docPath): void => {
    fs.outputFile(
        path.join(docPath, '.vuepress/config.js'),
        dedent`
        /**
         * 此文件是由脚本 scripts/generator.ts 自动生成
         */
        module.exports = {
            title: '前端',
            description: '',
            base: '/frontend/',
            port: '3000',
            dest: './dist',
            themeConfig: {
                repo: 'yemuguliunian/frontend',
                sidebarDepth: 2,
                nav: [
                    {
                        text: '知识',
                        link: '/knowledge/',
                    },
                    {
                        text: '面试题',
                        link: '/interview-questions/',
                    },
                ],
                sidebar: {
                    ${generatorFolder
                        .map((folder) => {
                            return dedent`
                        '/${folder}': [
                            ${generatorSidebar(`${docsPath}/${folder}`, folder)}
                        ]
                        `;
                        })
                        .join(',')}
                },
                smoothScroll: true,
            },
            plugins: ['@vuepress/back-to-top', ['@yemu419/interactive-js']],
        };
        `,
    );
};

/**
 * 生成目录
 */
const generatorCatalog = (docPath, basePath, suffix?: string) => {
    return (function readdir(readPath: string) {
        const files = fs.readdirSync(readPath);
        return files
            .map((filename) => {
                if (ignore.includes(filename)) {
                    return;
                }
                const fullPath = path.join(readPath, filename);
                const relativePath = path.relative(docPath, fullPath);
                if (relativePath.includes('README.md')) {
                    return;
                }
                const stat = fs.statSync(fullPath);
                const link = relativePath.replace('.md', '');

                if (stat.isFile()) {
                    return `-   [${getTitle(fullPath)}](${basePath}${link}${suffix || ''})`;
                }
                if (stat.isDirectory()) {
                    return dedent`
                -   ${filename.replace('_', ' ')}
                    ${readdir(fullPath)}
                `;
                }
            })
            .filter((item) => item)
            .join('\n');
    })(docPath);
};

const writeCatalog = (folder) => {
    fs.outputFile(
        path.join(`${docsPath}/${folder}`, 'README.md'),
        dedent`
        # 目录

        ${generatorCatalog(`${docsPath}/${folder}`, BASE)}
        `,
    );
};

(function generator() {
    generatorFolder.map((folder) => writeCatalog(folder));
    writeConfigFile(docsPath);
})();
