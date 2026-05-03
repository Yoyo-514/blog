// import type { UserThemeConfig } from 'valaxy-theme-lolimeow'
import { defineValaxyConfig } from 'valaxy'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig({
  // site config see site.config.ts

  theme: 'lolimeow',

  themeConfig: {
    ui: {
      primary: '#66CCFF',
    },

    // 背景图
    background: {
      type: 'image',
      image: {
        urls: ['/background.jpg'],
        apiUrls: [
          'https://api.yoyo514.top/random',
        ],
        random: true,
        overlayOpacity: 0.3,
      },
    },

    // 首屏
    hero: {
      enable: false,
      mottoSource: 'hitokoto',
      hitokoto: {
        showFrom: true,
        sentenceTypes: ['a', 'b', 'c'],
        maxLength: 30,
      },
      typewriter: true,
    },

    navbar: [
      { text: '首页', link: '/', icon: 'i-ri-home-line' },
      { text: '归档', link: '/archives/', icon: 'i-ri-archive-line' },
      { text: '分类', link: '/categories/', icon: 'i-ri-folder-line' },
      { text: '标签', link: '/tags/', icon: 'i-ri-price-tag-3-line' },
      { text: '友链', link: '/links/', icon: 'i-ri-links-line' },
      { text: '关于', link: '/about/', icon: 'i-ri-user-line' },
    ],
    navbarOptions: {
      title: 'My Blog',
      tools: ['toggleDark', 'search'],
      hamburgerStyle: 'classic',
    },

    links: {
      statusCheck: true,
      groups: [
        {
          title: '大佬们',
          items: [
            {
              name: '晨曦',
              desc: '不积跬步无以至千里',
              url: 'https://chenxi.in/',
              avatar: 'https://chenxi.in/images/avatar.png',
              color: '#F2E3DF',
            },
            {
              name: '恋玲花',
              desc: '愿所有温柔之人都被世界温柔以待',
              url: 'https://blog.thdog.moe/',
              avatar: '/links/avatar-thdog.webp',
              color: '#F5ECEE',
            }
          ]
        }
      ]
    },

    postList: {
      title: 'Discovery',
      coverApiUrls: ['https://api.yoyo514.top/random?device=desktop'],
      coverRandom: true,
      showExcerpt: true,
      excerptLength: 140,
      maxColumns: 1,
      minCardWidth: '18rem',
    },
  },

  unocss: { safelist },
})
