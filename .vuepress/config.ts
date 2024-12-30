import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
// 水印插件
// import { watermarkPlugin } from '@vuepress/plugin-watermark'
// 看板娘插件
// import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';
// 图片预览 https://ecosystem.vuejs.press/zh/plugins/features/medium-zoom.html
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'

export default defineUserConfig({
  base: "/blog/",
  title: "柒月廿三",
  head: [['link', { rel: 'icon', href: '/head-square.png' }]],
  description: "Just playing around",
  bundler: viteBundler(),
  host: "127.0.0.1",
  port: 18080,
  // open: true,
  plugins: [
    // https://github.com/francoischalifour/medium-zoom#options
    mediumZoomPlugin({
      // 默认会应用于所有 Markdown 渲染的图片
      selector: 'img',
      // 配置缩放选项
      zoomOptions: {
        margin: 16, // 图片与窗口的边距
      },
      // 应用前的钩子函数
      delay: 300, // 延迟应用 zoom 的时间 (毫秒)
    }),
    // 水印
    // watermarkPlugin({
    //   // options
    //   enabled: false,
    //   watermarkOptions: {
    //     content: '这是个水印'
    //   }
    // }),
    // 看板娘
    // oml2dPlugin({
    //   // 在这里配置选项
    //   models: [
    //     {
    //       "path": "https://model.oml2d.com/cat-black/model.json",
    //       "scale": 0.15,
    //       "position": [0, 20],
    //       "stageStyle": {
    //         "height": 350
    //       }
    //     }
    //   ]
    // })
  ],
  // bundler: webpackBundler(),
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    // primaryColor: '#3aa675', // 自定义主题的基础色
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        lastUpdatedText: '最后更新时间',
        catalogTitle: '页面导航',
        tip: '提示',
        info: '信息',
        warning: '警告',
        danger: '危险',
        details: '详情',
        editLinkText: '编辑当前页面',
        notFound: '哇哦，没有发现这个页面！',
        backToHome: '返回首页'
      }
    },
    colorMode: 'dark',
    logo: "/head/head-square.png",
    author: "LXang723",
    authorAvatar: "/head/head-square.png",
    // https://theme-reco.vuejs.press/docs/theme/git.html
    docsRepo: "https://github.com/LXang723/blog", // 文档源文件的仓库 URL
    docsBranch: "main", // 文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。
    docsDir: "", // 文档项目存放在工程的子目录。
    lastUpdatedText: "",
    // socialLinks（bug）会重复生成
    // socialLinks: [
    //   { icon: 'IconGitHub', link: 'https://github.com/vuepress-reco/vuepress-theme-reco' }
    // ],
    friendshipLinks: [
      {
        title: 'vuepress-reco',
        logo: 'https://avatars.githubusercontent.com/u/54167020?s=200&v=4',
        link: 'https://theme-reco.vuejs.press/'
      },
      {
        title: 'vuepress',
        logo: 'https://avatars.githubusercontent.com/u/48539483?s=200&v=4',
        link: 'https://v2.vuepress.vuejs.org/zh/'
      },
      {
        title: 'spring-boot',
        logo: 'https://avatars.githubusercontent.com/u/317776?s=200&v=4',
        link: 'https://docs.spring.io/spring-boot/docs/'
      },
      {
        title: 'spring-framework',
        logo: 'https://avatars.githubusercontent.com/u/317776?s=200&v=4',
        link: 'https://docs.spring.io/spring-boot/docs/'
      },
    ],
    // 自动设置系列（bug）https://github.com/vuepress-reco/vuepress-theme-reco/issues/278
    // autoSetSeries: true,
    // https://theme-reco.vuejs.press/docs/theme/series.html
    series: {
      "/blogs/middleware/": [
        {
          text: "RabbitMQ",
          children: ["rabbitmq/rabbitmq"],
        },
        {
          text: "Elasticsearch",
          children: ["elasticsearch/elastic"],
        },
      ],
    },
    // 自动设置分类（注意文件夹结构，只能使用一层文件夹）
    // autoSetBlogCategories: true,
    // autoAddCategoryToNavbar API 后期会做调整，但不会废弃，请谨慎使用。
    // 自动将分类和标签添加至头部导航条
    // autoAddCategoryToNavbar: {
    //   location: 1, // 插入位置，默认 0
    //   showIcon: true, // 展示图标，默认 false
    // },
    // 当 autoAddCategoryToNavbar 为 true 时，则全部取默认值
    // autoAddCategoryToNavbar: true,
    // 图标 https://www.xicons.org/#/zh-CN
    // 导航栏
    navbar: [
      { text: "首页", link: "/", icon: 'IconHome' }, // Home
      // categories 和 tags 的路径需要根据 build 后的文件确定，设定一个不会变的
      // { text: "分类", link: "/categories/Overview/1.html", icon: 'IconCategory' }, // Categories
      // { text: "标签", link: "/tags/Overview/1.html", icon: 'IconTag' }, // Tags
      // 内置页面： /timeline.html（时间轴页面） 、/posts.html（博客列表页面） 、/friendship-link.html（友情链接）
      // { text: "Timeline", link: "/timeline.html", icon: 'IconTimeline' },
      { text: "博客", link: "/posts.html", icon: 'IconBlog' }, // Blogs
      { text: "链接", link: "/friendship-link.html", icon: 'IconLink' }, // Links
      {
        text: "中间件", // Middleware
        icon: 'IconMiddle',
        children: [
          { text: "RabbitMQ", link: "/blogs/middleware/rabbitmq/rabbitmq", icon: 'IconRabbitMQ' },
          { text: "Elasticsearch", link: "/blogs/middleware/elasticsearch/elastic", icon: 'IconElasticsearch' }
        ]
      },
      {
        text: "Java",
        icon: 'IconJava',
        children: [
          { text: "JavaSE", link: "/series/javase/javase", icon: 'IconRabbitMQ' },
          { text: "JavaWeb", link: "/series/javaweb/javaweb", icon: 'IconElasticsearch' }
        ]
      },
    ],
    // 公告
    // https://theme-reco.vuejs.press/docs/theme/bulletin-popover.html
    // bulletin: {
    //   title: '交个朋友',
    //   body: [
    //     {
    //       type: "text",
    //       content: `我的笔记。`,
    //       style: "font-size: 14px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "我的仓库",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://www.cnblogs.com/july23">博客园<a/></li>
    //         <li><a href="https://blog.csdn.net/LXang723">CSDN<a/></li>
    //       </ul>`,
    //       style: "font-size: 14px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // commentConfig: {
    //   type: 'valine',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  // debug: true,
});
