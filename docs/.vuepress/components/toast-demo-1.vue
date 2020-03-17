<template>
  <div style="padding: 20px 0;">
    <h3>基础用法</h3>
    <p>默认1s之后关闭</p>
    <div>
      <f-button @click="$toast('更新成功😄', {position:'top'})">上方弹出</f-button>
      <f-button @click="$toast('更新成功😄', {position:'middle'})">中间弹出</f-button>
      <f-button @click="$toast('更新成功😄', {position:'bottom'})">下方弹出</f-button>
    </div>
    <p>
      代码
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script type="text/javascript">
  import Plugin from '../../../src/plugin.js'
  import fButton from '../../../src/Button/button.vue'
  import Vue from 'vue'

  Vue.use(Plugin)
  export default {
    data() {
      return {
        content: `
              <f-button @click="$toast('更新成功😄', {position:'top'})">上方弹出</f-button>
          <f-button @click="$toast('更新成功😄', {position:'middle'})">中间弹出</f-button>
          <f-button @click="$toast('更新成功😄', {position:'bottom'})">下方弹出</f-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    components: {
      fButton
    },
    methods: {
      showToast(position) {
        this.$toast('更新成功😄', {
          closeButton: {
            callback() {
              console.log('哈哈哈哈你好')
            }
          },
          enableHtml: false,
          position,
          autoClose: true
        })
      },
      showToast1() {
        this.showToast('top')
      }
    }
  }
</script>
