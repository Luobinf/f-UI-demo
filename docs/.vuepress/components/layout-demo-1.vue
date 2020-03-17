<template>
  <div style="padding: 20px 0;">
    <h3>基本用法</h3>
    <p>经典布局方式</p>
    <f-layout style="height: 100vh;">
      <f-header style="background-color: orange">header</f-header>
      <f-main style="background-color: skyblue">main</f-main>
      <f-footer style="background: blue;">footer</f-footer>
    </f-layout>
    <p>
      代码
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script type="text/javascript">
  import fLayout from '../../../src/Layout/layout.vue'
  import fHeader from '../../../src/Layout/header.vue'
  import fMain from '../../../src/Layout/main.vue'
  import fFooter from '../../../src/Layout/footer.vue'
  import fSider from '../../../src/Layout/sider.vue'

  export default {
    data() {
      return {
        content: `
          <f-layout style="height: 100vh;">
      <f-header style="background-color: orange">header</f-header>
      <f-main style="background-color: skyblue">main</f-main>
      <f-footer style="background: blue;">footer</f-footer>
  </f-layout>
      `.replace(/^ {8}/gm, '').trim()
      }
    },
    components: {
      fLayout,
      fHeader,
      fMain,
      fFooter,
      fSider
    }
  }
</script>
