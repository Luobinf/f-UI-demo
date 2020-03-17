<template>
  <div style="padding-top: 16px;">
    <h3>图标按钮</h3>
    <p>带图标的按钮可增强辨识度。</p>
    <div>
      <f-button icon="settings" type="primary">默认按钮</f-button>
      <f-button icon="settings" icon-position="right" type="primary">虚线按钮</f-button>
      <f-button icon="arrow-left" type="primary">主要按钮</f-button>
      <f-button icon="arrow-right" icon-position="right" type="primary">危险按钮</f-button>
    </div>
    <p>
     代码
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>

<script type="text/javascript">
  import fButton from '../../../src/Button/button'
  export default {
    components: {
      fButton
    },
    data () {
      return {
        content: `
          <f-button icon="settings" type="primary">默认按钮</f-button>
          <f-button icon="settings" icon-position="right" type="primary">虚线按钮</f-button>
          <f-button icon="arrow-left" type="primary">主要按钮</f-button>
          <f-button icon="arrow-right" icon-position="right" type="primary">危险按钮</f-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
