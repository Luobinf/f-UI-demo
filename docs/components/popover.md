---
title: Popover
---

# Popover 气泡卡片
文字提示气泡框。

<ClientOnly>
  <popover-demo-1></popover-demo-1>
  <popover-demo-2></popover-demo-2>
  <popover-demo-3></popover-demo-3>
  <popover-demo-4></popover-demo-4>
</ClientOnly>


代码
```JS
<template>
    <f-popover width="250" title="Title" :visible.sync="visible" position="top">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
        <f-button @click="visible = false" style="margin-left: 60%">Close</f-button>
      </template>
      <f-button>Top</f-button>
    </f-popover>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        visible: false
      }
    },
    components: {
      fPopover,
      fButton
    }
  }
</script>
```

### Attributes
| 参数        | 说明           | 类型  |  可选值 |  默认值     |
| ------------- |:-------------:| -----:| -----:| -----:|
| visible     | 是否可见，当内容内传入关闭按钮时有用| boolean | —| false|
| trigger     | 触发方式| string | click/hover  | click|
| position     | 位置| string | top/bottom/left/right  | top|
| title     | 显示的标题| string | —  | —|
| content     | 显示的内容，也可以通过v-slot传入| string | —  | —|
| width     | 宽度| string | —  |150|


### Events
| 事件名称        | 说明           | 回调参数    |
| ------------- |:-------------:| -----:| 
| show     | 显示时触发 | —— |
| hide     | 隐藏时触发 | —— |
