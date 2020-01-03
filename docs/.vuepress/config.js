// const path = require('path')
module.exports = {
  base: '/Vue-wheel/',
  title: 'f-UI',
  description: '一个好用的UI框架(Vue)',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      // {text: '文档', link: '/guide/'},
      {text: '交流', link: 'https://google.com'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/Install/',
          '/Start/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/grid',
          '/components/layout',
          '/components/toast'
        ]
      },

    ]
  },
  // scss:{
  //   includePaths: [path.join(__dirname, '../../styles')]
  // }
}
