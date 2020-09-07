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
            '/knowledge': [
                {
                    title: 'Vue',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        '/knowledge/Vue/scoped-css',
                        '/knowledge/Vue/首屏加载优化'
                    ]
                },
                {
                    title: 'ajax',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        '/knowledge/ajax/XMLHttpRequest-download'
                    ]
                },
                {
                    title: 'css',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        '/knowledge/css/counter-reset__counter-increment',
                        '/knowledge/css/flex'
                    ]
                },
                {
                    title: 'design',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        '/knowledge/design/观察者模式与发布订阅模式'
                    ]
                },
                {
                    title: 'javaScript',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        '/knowledge/javaScript/cloneDeep',
                        '/knowledge/javaScript/datatypes',
                        '/knowledge/javaScript/print',
                        '/knowledge/javaScript/可选链'
                    ]
                },
                {
                    title: 'performance',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        '/knowledge/performance/debounce',
                        '/knowledge/performance/hasOwnPropertyAndindexOf',
                        '/knowledge/performance/throttle'
                    ]
                }
            ],'/interview-questions': [
                {
                    title: 'async',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        
                    ]
                },
                {
                    title: 'browser',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        
                    ]
                },
                {
                    title: 'css',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        '/interview-questions/css/如何实现不定高度水平垂直居中'
                    ]
                },
                {
                    title: 'design',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        
                    ]
                },
                {
                    title: 'frame',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        {
                            title: 'React',
                            collapsable: true,
                            sidebarDepth: 0,
                            children: [
                                
                            ]
                        },
                        {
                            title: 'Vue',
                            collapsable: true,
                            sidebarDepth: 0,
                            children: [
                                '/interview-questions/frame/Vue/watchAndComputed'
                            ]
                        }
                    ]
                },
                {
                    title: 'html',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        
                    ]
                },
                {
                    title: 'javaScript',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        '/interview-questions/javaScript/Q1',
                        '/interview-questions/javaScript/prototype',
                        '/interview-questions/javaScript/编程题'
                    ]
                },
                {
                    title: 'network',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        
                    ]
                },
                {
                    title: 'tool',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        
                    ]
                }
            ]
        },
        smoothScroll: true,
    },
    plugins: ['@vuepress/back-to-top', ['@yemu419/interactive-js']],
};