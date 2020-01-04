<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <f-button>默认按钮</f-button>
    <f-button icon="settings">
      默认按钮
    </f-button>
    <f-button :loading="true">默认按钮</f-button>
    <f-button disabled>默认按钮</f-button>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import Button from '../../../src/button/button'

  export default {
    components: {
      'f-button': Button
    },
    data () {
      return {
        content: `
          <f-button>默认按钮</f-button>
          <f-button icon="settings">默认按钮</f-button>
          <f-button :loading="true">默认按钮</f-button>
          <f-button disabled>默认按钮</f-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
