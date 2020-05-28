import { dedent } from 'vtils';
import * as path from 'path';
const fs = require('fs-extra');
import { getTitle } from './utils';

let [docPath = 'docs'] = process.argv.slice(2);
docPath = path.join(process.cwd(), docPath);
const ignore = ['.vuepress'];

const GITHUB_PAGE = 'https://yemuguliunian.github.io';
const BASE = '/Frontend-Interview-Questions/';

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

const writeCatalog = (docPath) => {
    fs.outputFile(
        path.join(docPath, 'README.md'),
        dedent`
        # 目录

        ${generatorCatalog(docPath, BASE)}
        `,
    );
};

/**
 * 生成 README.md docs/README.md docs/.vuepress/config.js 3个文件
 */
(function generator(docPath: string) {
    writeCatalog(docPath);
})(docPath);
