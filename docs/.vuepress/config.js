const path = require('path')
module.exports = {
  base: '/f-UI-demo/',
  title: 'f UI',
  description: '一个好用的UI框架',
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '文档', link: '/guide/'},
    ],
    sidebar: [
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/button',
          '/components/tabs',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
          '/components/layout',
          '/components/input'
        ]
      },

    ]
  },
  // scss:{
  //   includePaths: [path.join(__dirname, '../../styles')]
  // }
}
