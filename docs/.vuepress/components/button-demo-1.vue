<template>
  <div style="padding-top: 20px;">
    <h3>基础用法</h3>
    <p>基础的按钮用法。</p>
    <div>
      <f-button>默认按钮</f-button>
      <f-button type="dashed">虚线按钮</f-button>
      <f-button type="primary">主要按钮</f-button>
      <f-button type="danger">危险按钮</f-button>
    </div>
    <p>
      代码
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import fButton from '../../../src/Button/button'
  export default {
    components: {
      fButton
    },
    data () {
      return {
        content: `
          <f-button>Default</f-button>
          <f-button type="dashed">Dashed</f-button>
          <f-button type="primary">Primary</f-button>
          <f-button type="danger">Danger</f-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
