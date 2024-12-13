import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
// import { webpackBundler } from '@vuepress/bundler-webpack'
// 水印插件
import { watermarkPlugin } from '@vuepress/plugin-watermark'
// 看板娘插件
// import { oml2dPlugin } from 'vuepress-plugin-oh-my-live2d';

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
    // 水印
    watermarkPlugin({
      // options
      enabled: false
    }),
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
    logo: "/head-square.png",
    author: "LXang723",
    authorAvatar: "/head-square.png",
    // https://theme-reco.vuejs.press/docs/theme/git.html
    docsRepo: "https://github.com/LXang723/blog", // 文档源文件的仓库 URL
    docsBranch: "main", // 文档源文件的仓库分支。它将会用于生成 编辑此页 的链接。
    docsDir: "", // 文档项目存放在工程的子目录。
    lastUpdatedText: "",
    // 自动设置系列（未生效）
    autoSetSeries: true,
    // https://theme-reco.vuejs.press/docs/theme/series.html
    series: {
      "/blogs/middleware/": [
        {
          text: "RabbitMQ",
          children: ["rabbitmq/rabbitmq"],
        },
        {
          text: "Redis",
          children: ["redis/redis"],
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
      { text: "Home", link: "/", icon: 'IconHome' },
      // categories 和 tags 的路径需要根据 build 后的文件确定，设定一个不会变的
      { text: "Categories", link: "/categories/Blog/1.html", icon: 'IconCategory' },
      { text: "Tags", link: "/tags/Blog/1.html", icon: 'IconTag' },
      // Timeline 和 Blogs 是
      { text: "Timeline", link: "/timeline.html", icon: 'IconTimeline' },
      { text: "Blogs", link: "/posts.html", icon: 'IconBlog' },
      {
        text: "Middleware",
        icon: 'IconMiddle',
        children: [
          { text: "RabbitMQ", link: "/blogs/middleware/rabbitmq/rabbitmq", icon: 'IconRabbitMQ' },
          // { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
          { text: "Elasticsearch", link: "/blogs/middleware/elasticsearch/elastic", icon: 'IconEs' }
        ]
      },
    ],
    // 公告
    // https://theme-reco.vuejs.press/docs/theme/bulletin-popover.html
    bulletin: {
      title: '交个朋友',
      body: [
        {
          type: "text",
          content: `我的笔记。`,
          style: "font-size: 14px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "我的仓库",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://www.cnblogs.com/july23">博客园<a/></li>
            <li><a href="https://blog.csdn.net/LXang723">CSDN<a/></li>
          </ul>`,
          style: "font-size: 14px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            {
              text: "打赏",
              link: "/docs/others/donate.html",
            },
          ],
        },
      ],
    },
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
