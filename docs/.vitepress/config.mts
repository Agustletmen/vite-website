import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "好一二三",
  description: "好一二三",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    siteTitle: "好一二三",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide' },
      { text: '电脑小白', link: '/guide' },
      { text: '资源宝库', link: '/guide' },
      {
        text: '极客学院',
        items: [
          { text: '计算机基础', link: '/item-1' },
          { text: '人工智能', link: '/item-2' },
          { text: '项目推荐', link: '/project' },
          { text: '目标规划', link: '/item-3' }
        ]
      },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      // 当用户位于 `guide` 目录时，会显示此侧边栏
      '/guide/': [
        {
          text: 'Guide',
          collapsed: true,
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        },
        {
          text: "introduction",
          collapsed: true,
          items: [
            { text: 'Index', link: '/guide/' },
            { text: 'One', link: '/guide/one' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      // 当用户位于 `config` 目录时，会显示此侧边栏
      '/config/': [
        {
          text: 'Config',
          collapsed: false,
          items: [
            { text: 'Index', link: '/config/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   },
    //   {
    //     text: 'DeepSeek',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Agustletmen' },
      { icon: 'wechat', link: '' },
      { icon: 'qq', link: '' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/119072332' },
    ],

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          }
        }
      }
    }
  }
})
