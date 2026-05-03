import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://blog.yoyo514.top/',
  lang: 'zh-CN',
  timezone: 'Asia/Shanghai',
  title: 'Mumei no Oka',
  subtitle: '生活不止眼前的苟且， 还有诗和远方',
  favicon:  '/favicon.ico',
  author: {
    name: 'Yoyo514',
    avatar: '/avatar.jpg',
  },
  description: '已识乾坤大，犹怜草木青',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/Yoyo-514',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '网易云音乐',
      link: 'https://music.163.com/#/user/home?id=411646801',
      icon: 'i-ri-netease-cloud-music-line',
      color: '#C20C0C',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1579790',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:1013069090@qq.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    // {
    //   name: 'Travelling',
    //   link: 'https://www.travellings.cn/go.html',
    //   icon: 'i-ri-train-line',
    //   color: 'var(--va-c-text)',
    // },
  ],

  search: {
    enable: true,
    provider: 'fuse'
  },
  fuse: {
    options: {
      keys: ['title', 'tags', 'categories', 'excerpt', 'content'],
      threshold: 0.35,
      ignoreLocation: true,
    },
  },

  comment: {
    enable: true
  },

  statistics: {
    enable: true
  },

  orderBy: 'updated',
  lastUpdated: true,

  // sponsor: {
  //   enable: true,
  //   title: '我很可爱，请给我钱！',
  //   methods: [
  //     {
  //       name: '支付宝',
  //       url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
  //       color: '#00A3EE',
  //       icon: 'i-ri-alipay-line',
  //     },
  //     {
  //       name: 'QQ 支付',
  //       url: 'https://cdn.yunyoujun.cn/img/donate/qqpay-qrcode.png',
  //       color: '#12B7F5',
  //       icon: 'i-ri-qq-line',
  //     },
  //     {
  //       name: '微信支付',
  //       url: 'https://cdn.yunyoujun.cn/img/donate/wechatpay-qrcode.jpg',
  //       color: '#2DC100',
  //       icon: 'i-ri-wechat-pay-line',
  //     },
  //   ],
  // },
})
