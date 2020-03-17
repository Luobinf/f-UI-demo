<template>
  <div style="padding: 20px 0;">
    <h3 style="margin: 14px 0">浮层内关闭</h3>
    <p style="margin: 14px 0">浮层内可以使用按钮来关闭浮层</p>
    <f-popover width="250" title="Title" :visible.sync="visible1" position="top">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
        <f-button @click="visible1 = false" style="margin-left: 60%">Close</f-button>
      </template>
      <f-button>Top</f-button>
    </f-popover>
    <f-popover width="250" title="Title" :visible.sync="visible2" position="bottom">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
        <f-button @click="visible2 = false" style="margin-left: 60%">Close</f-button>
      </template>
      <f-button>Bottom</f-button>
    </f-popover>
    <f-popover width="250" title="Title" :visible.sync="visible3" position="left">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
        <f-button @click="visible3 = false" style="margin-left: 60%">Close</f-button>
      </template>
      <f-button>left</f-button>
    </f-popover>
    <f-popover width="250" title="Title" :visible.sync="visible4" position="right">
      <template v-slot:content>
        <p>Content内容</p>
        <p>Content内容</p>
        <f-button @click="visible4 = false" style="margin-left: 60%">Close</f-button>
      </template>
      <f-button>right</f-button>
    </f-popover>
  </div>
</template>

<script type="text/javascript">
  import fPopover from '../../../src/popover.vue'
  import fButton from '../../../src/Button/button'

  export default {
    data() {
      return {
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false
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

