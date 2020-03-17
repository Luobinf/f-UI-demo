---
title: Toast
---
# Toast 土司


<ClientOnly>
  <toast-demo-1></toast-demo-1>
  <toast-demo-2></toast-demo-2>
</ClientOnly>

代码
```JS
<template>
    <div>
      <f-button @click="showToast('top')">上方弹出</f-button>
      <f-button @click="showToast('middle')">中间弹出</f-button>
      <f-button @click="showToast('bottom')">下方弹出</f-button>
    </div>
</template>

<script>
  export default {
    components: {
      fButton
    },
    methods: {
      showToast(position) {
        this.$toast('更新成功😄', {
          closeButton: {
            text: '关闭',
            callback() {
              console.log('弹窗关闭后执行的回调函数')
            }
          },
          enableHtml: false,
          position,
          autoClose: false
        })
      }
    }
  }
</script>

```

### Attributes
| 参数        | 说明           | 类型  |  可选值 |  默认值     |
| ------------- |:-------------:| -----:| -----:| -----:|
| autoClose     | 是否自动关闭| boolean | —  | true|
| enableHtml     | 是否支持html| boolean | —  | false|
| position     | 弹窗出现的位置| string | top/middle/bottom  | top|
| closeButton     | 与关闭按钮相关的一些信息| object | —  | —|
| text     | closeButton对象的text字段，表示关闭按钮的名称| string | —  |—|
| callback     | closeButton对象的text字段，弹窗关闭时会执行的回调函数| function | —  |—|
