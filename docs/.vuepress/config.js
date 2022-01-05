module.exports = {
    title: "summerheart's blog",
    description: '一位中年大叔的博客',
    themeConfig: {
        //导航
        nav: [
            { text: '首页', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Java',
                ariaLabel: 'java目录',
                items: [
                  { text: 'JVM', link: '/java/a/' },
                  { text: 'B', link: '/java/b/' }
                ]
            },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        //侧边栏
        sidebar: {
            '/java/a/': [
                '',
                'A'
            ],
            '/java/b/': [
                '',
                'B'
            ]
        }

    }
}