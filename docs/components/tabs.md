---
title: Tabs
---
# Tab 标签页
选项卡切换组件。 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

<ClientOnly>
  <tabs-demo-1></tabs-demo-1>
  <tabs-demo-2></tabs-demo-2>
</ClientOnly>

### Tabs Attributes
| 参数        | 说明           | 类型  |  可选值 |  默认值     |
| ------------- |:-------------:| -----:| -----:| -----:|
| selected     | 绑定值，选中选项卡的 name(必须传入)| string | —  | —|


### Tabs Events
| 事件名称        | 说明           | 回调参数    |
| ------------- |:-------------:| -----:| 
| tab-click     | tab 被选中时触发 | 被选中的标签 tab 实例 |


### TabPane Attributes
| 参数        | 说明           | 类型  |  可选值 |  默认值|
| ------------- |:-------------:| -----:| -----:| -----:|
| label      | 选项卡标题(必须传入) | string | —  | —|
| name | 与选项卡绑定值 selected 对应的标识符，表示选项卡别名(必须传入) |string |—|—  |
| disabled      | 是否禁用某一个tab     |   boolean | true/false | false |

