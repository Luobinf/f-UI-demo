<template>
  <div style="padding: 20px 0;">
    <h3>手风琴效果</h3>
    <p>每次只能展开一个面板</p>
    <f-collapse :selected.sync="activeName" single>
      <f-collapse-item title="标题1" name="1">内容1</f-collapse-item>
      <f-collapse-item title="标题2" name="2">内容2</f-collapse-item>
      <f-collapse-item title="标题3" name="3">内容3</f-collapse-item>
    </f-collapse>
    <p>
      输出: 被选中的collapse为{{activeName}}
    </p>
  </div>
</template>

<script type="text/javascript">
  import fCollapse from '../../../src/Collapse/collapse.vue'
  import fCollapseItem from '../../../src/Collapse/collapse-item.vue'
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
