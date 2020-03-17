<template>
  <div style="padding-top: 16px;">
    <h3>加载中</h3>
    <div>
      <f-button icon="loading" :loading="true" type="primary">
        加载中
      </f-button>
    </div>
    <p>
      代码
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import fButton from '../../../src/Button/button'
  import fButtonGroup from '../../../src/Button/button-group'
  export default {
    components: {
      fButton,
      fButtonGroup
    },
    data () {
      return {
        content: `
          <f-button icon="loading" :loading="true" type="primary">
            加载中
          </f-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
