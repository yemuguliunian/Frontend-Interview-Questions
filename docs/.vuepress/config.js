/**
 * 此文件是由脚本 scripts/generator.ts 自动生成
 */
module.exports = {
    title: '前端面试问题',
    description: '',
    base: '/Frontend-Interview-Questions/',
    port: '3000',
    dest: './dist',
    themeConfig: {
        repo: 'yemuguliunian/Frontend-Interview-Questions',
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Html',
                collapsable: true,
                children: [],
            },
            {
                title: 'CSS',
                collapsable: true,
                children: ['/css/如何实现不定高度水平垂直居中'],
            },
            {
                title: 'JS基础',
                collapsable: true,
                children: [],
            },
            {
                title: '异步',
                collapsable: true,
                children: [],
            },
            {
                title: '浏览器',
                collapsable: true,
                children: [],
            },
            {
                title: '网络',
                collapsable: true,
                children: [],
            },
            {
                title: '框架相关',
                children: [
                    {
                        title: 'React',
                        collapsable: true,
                        children: [],
                    },
                    {
                        title: 'Vue',
                        collapsable: true,
                        children: [],
                    },
                ],
            },
            {
                title: '编程题',
                collapsable: true,
                children: [],
            },
            {
                title: '工程化',
                collapsable: true,
                children: [],
            },
            {
                title: '设计模式',
                collapsable: true,
                children: [],
            },
        ],
        smoothScroll: true,
    },
    plugins: ['@vuepress/back-to-top'],
};
