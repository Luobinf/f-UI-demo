<template>
  <div style="padding: 20px 0;">
    <h3>弹窗内关闭</h3>
    <div>
      <f-button @click="showToast('top')">上方弹出</f-button>
      <f-button @click="showToast('middle')">中间弹出</f-button>
      <f-button @click="showToast('bottom')">下方弹出</f-button>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Plugin from '../../../src/plugin.js'
  import fButton from '../../../src/Button/button.vue'
  import Vue from 'vue'
  Vue.use(Plugin)
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
              console.log('哈哈哈哈你好')
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
