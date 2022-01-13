module.exports = {
    title: "SummerHeart的博客",
    description: '一位中年大叔的博客',
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        //导航
        nav: [
            { text: '首页', link: '/' },
            {
                text: '扎实基础',
                ariaLabel: 'Java相关',
                items: [
                  { text: 'Java基础', link: '/java/base/' },
                  { text: 'Java集合框架', link: '/java/collection/' },
                  { text: 'Java虚拟机', link: '/java/jvm/Java发展大事件' },
                  { text: '多线程编程', link: '/java/multithread/Thread之join方法详解' }
                ]
            },
            {
                text: '框架扩展',
                ariaLabel: '框架相关',
                items: [
                  { text: 'Spring框架', 
                    items: [
                        { text: 'Spring Core', link: '/framework/spring-core/'},
                        { text: 'Spring MVC', link: '/framework/spring-mvc/' },
                        { text: 'Spring Security', link: '/framework/spring-security/' },
                        { text: 'Spring Boot', link: '/framework/spring-boot/' },
                        { text: 'Spring Cloud', link: '/framework/spring-cloud/' },
                    ]
                  },
                  { text: '其他', 
                    items:[
                        { text: 'MyBatis', link: '/framework/mybatis/' },
                        { text: 'Dubbo', link: '/framework/dubbo/' },
                        { text: 'Apollo', link: '/framework/apollo/' }
                    ]
                  }
                ]
            },
            { text: '算法', ariaLabel: '算法与数据结构相关', link: '/algorithm/' },
            { text: 'GitHub', link: 'https://github.com/yihusitian/summerheart-blog' }
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        //侧边栏
        sidebar: {
            '/java/jvm/': getJVMSideBarConfig(),
            '/java/multithread/': getMultiThreadSideBarConfig()
        }
    }
}


function getJVMSideBarConfig() {
    return [
        {
            title: "Java虚拟机笔记整理",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Java发展大事件.md",
                "类加载子系统.md",
                "运行时数据区.md",
                "垃圾收集器.md",
                "深入剖析字节码.md",
                "虚拟机调优.md",
                "虚拟机面试题.md",
            ]
        }
    ]
}

function getMultiThreadSideBarConfig() {
    return [
        {
            title: "Java多线程笔记整理",
            collapsable: false,
            sidebarDepth: 0,
            children: [
                "Thread之join方法详解.md",
                "并发机制底层实现原理之volatile",
                "并发机制底层实现原理之synchronized",
            ]
        }
    ]
}