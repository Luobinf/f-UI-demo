<template>
  <div style="padding-top: 16px;">
    <h2>错误信息</h2>
    <f-input error="我出错了"></f-input>
    <p>
      代码
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import fInput from '../../../src/input'

  export default {
    components: {fInput},
    data () {
      return {
        content: `
          <f-input error="我出错了"></f-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
