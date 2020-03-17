<template>
  <div style="padding: 20px 0;">
    <h3>基础用法</h3>
    <p>可同时展开多个面板，面板之间不影响</p>
    <f-collapse :selected.sync="activeNames">
      <f-collapse-item title="标题1" name="1">内容1</f-collapse-item>
      <f-collapse-item title="标题2" name="2">内容2</f-collapse-item>
      <f-collapse-item title="标题3" name="3">内容3</f-collapse-item>
    </f-collapse>
    <p>
      输出结果: 被选中的collapse为{{activeNames}}
    </p>
    <p>
      代码
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script type="text/javascript">
  import fCollapse from '../../../src/Collapse/collapse.vue'
  import fCollapseItem from '../../../src/Collapse/collapse-item.vue'

  export default {
    data() {
      return {
        activeNames: [],
        content: `
      <f-collapse :selected.sync="collapseTab">
      <f-collapse-item title="标题1" name="1">内容1</f-collapse-item>
      <f-collapse-item title="标题2" name="2">内容2</f-collapse-item>
      <f-collapse-item title="标题3" name="3">内容3</f-collapse-item>
  </f-collapse>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    components: {
      fCollapse,
      fCollapseItem
    }
  }
</script>
