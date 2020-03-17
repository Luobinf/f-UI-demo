---
title: Collapse
---
# Collapse 折叠面板
通过折叠面板收纳内容区域

<ClientOnly>
  <collapse-demo-1></collapse-demo-1>
  <collapse-demo-2></collapse-demo-2>
</ClientOnly>

代码
```JS
<template>
    <f-collapse :selected.sync="activeName" single>
      <f-collapse-item title="标题1" name="1">内容1</f-collapse-item>
      <f-collapse-item title="标题2" name="2">内容2</f-collapse-item>
      <f-collapse-item title="标题3" name="3">内容3</f-collapse-item>
    </f-collapse>
    <p>
      输出结果: 被选中的collapse为{{collapseTab}}
    </p>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        activeName: []
      }
    },
    components: {
      fCollapse,
      fCollapseItem
    }
  }
</script>
```

### Collapse Attributes
| 参数        | 说明           | 类型  |  可选值 |  默认值     |
| ------------- |:-------------:| -----:| -----:| -----:|
| selected     | 当前激活的面板| array | —  | []|
| single     | 手风琴模式| boolean | true/false  | false|


### Collapse Events
| 事件名称        | 说明           | 回调参数    |
| ------------- |:-------------:| -----:| 
| change     | 当前激活面板改变时触发 | activeNames: array |


### CollapseItem Attributes
| 参数        | 说明           | 类型  |  可选值 |  默认值|
| ------------- |:-------------:| -----:| -----:| -----:|
| title      | 折叠面板的标题(必须传入) | string | —  | —|
| name | 与折叠面板绑定值 selected 对应的标识符，表示选项卡别名(必须传入) |string|Number |—|—  |
