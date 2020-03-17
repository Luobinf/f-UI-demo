<template>
  <div style="padding: 20px 0;">
    <h3 style="margin: 14px 0">基础用法</h3>
    <p style="margin: 14px 0">基础的气泡卡片用法，默认在上方显示。</p>
    <f-popover title="Title" content="我是content">
      <f-button>Top</f-button>
    </f-popover>
    <f-popover position="bottom" title="Title" content="我是content">
      <f-button>Bottom</f-button>
    </f-popover>
    <f-popover position="left" title="Title" content="我是content">
      <f-button>left</f-button>
    </f-popover>
    <f-popover position="right" title="Title" content="我是content">
      <f-button>right</f-button>
    </f-popover>
    <p style="margin: 14px 0">
      代码
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script type="text/javascript">
import fPopover from '../../../src/popover.vue'
import fButton from '../../../src/Button/button'
export default {
  data () {
    return {
      content: `
    <f-popover position="top" title="Title" content="我是content">
      <f-button>Top</f-button>
    </f-popover>
    <f-popover position="bottom" title="Title" content="我是content">
      <f-button>Bottom</f-button>
    </f-popover>
    <f-popover position="left" title="Title" content="我是content">
      <f-button>left</f-button>
    </f-popover>
    <f-popover position="right" title="Title" content="我是content">
      <f-button>right</f-button>
    </f-popover>
      `.replace(/^ {8}/gm, '').trim()
    }
  },
  components: {
    fPopover,
    fButton
  }
}
</script>
<style lang="scss" scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>

