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
                title: '面试题',
                path: '/',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    {
                        title: 'Html',
                        collapsable: false,
                        sidebarDepth: 0,
                        path: '/html',
                    },
                    {
                        title: 'CSS',
                        collapsable: true,
                        path: '/css',
                        sidebarDepth: 0,
                        children: ['/css/如何实现不定高度水平垂直居中'],
                    },
                    {
                        title: 'JS基础',
                        collapsable: false,
                        sidebarDepth: 0,
                        path: '/javaScript',
                    },
                    {
                        title: '异步',
                        collapsable: false,
                        sidebarDepth: 0,
                        path: '/async',
                    },
                    {
                        title: '浏览器',
                        collapsable: false,
                        sidebarDepth: 0,
                        path: '/browser',
                    },
                    {
                        title: '网络',
                        collapsable: false,
                        sidebarDepth: 0,
                        path: '/network',
                    },
                    {
                        title: '框架相关',
                        sidebarDepth: 0,
                        children: ['/frame/React', '/frame/Vue'],
                    },
                    {
                        title: '编程题',
                        sidebarDepth: 0,
                        children: [],
                    },
                    {
                        title: '工程化',
                        collapsable: false,
                        sidebarDepth: 0,
                        path: '/tool',
                    },
                    {
                        title: '设计模式',
                        collapsable: false,
                        sidebarDepth: 0,
                        path: '/design',
                    },
                ],
            },
        ],
        smoothScroll: true,
    },
    plugins: ['@vuepress/back-to-top'],
};
