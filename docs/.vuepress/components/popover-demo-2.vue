<template>
  <div style="padding: 20px 0;">
    <h3 style="margin: 14px 0">支持将内容以v-slot具名插槽的方式传入</h3>
    <f-popover width="250" title="Title">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
      </template>
      <f-button>Top</f-button>
    </f-popover>
    <f-popover width="250" title="Title" position="bottom">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
      </template>
      <f-button>Bottom</f-button>
    </f-popover>
    <f-popover width="250" title="Title" position="left">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
      </template>
      <f-button>left</f-button>
    </f-popover>
    <f-popover width="250" title="Title" position="right">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
      </template>
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
    <f-popover width="250" title="Title">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
      </template>
      <f-button>Top</f-button>
    </f-popover>
    <f-popover width="250" title="Title" position="bottom">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
      </template>
      <f-button>Bottom</f-button>
    </f-popover>
    <f-popover width="250" title="Title" position="left">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
      </template>
      <f-button>left</f-button>
    </f-popover>
    <f-popover width="250" title="Title" position="right">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
      </template>
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

