<template>
  <div style="padding-top: 16px;">
    <h3>不同尺寸按钮</h3>
    <p>Button 组件提供除了默认值以外的两种尺寸，可以在不同场景下选择合适的按钮尺寸。</p>
    <div>
      <f-button size="small">小型按钮</f-button>
      <f-button>默认按钮</f-button>
      <f-button size="large">大型按钮</f-button>
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
          <f-button size="small">小型按钮</f-button>
          <f-button>默认按钮</f-button>
          <f-button size="large">大型按钮</f-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
