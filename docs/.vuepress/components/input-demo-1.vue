<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <f-input value="hello world"></f-input>
    <f-input value="hello world" readonly></f-input>
    <f-input value="hello world" disabled></f-input>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import fInput from '../../../src/input.vue'

  export default {
    components: {fInput},
    data () {
      return {
        selected: '1',
        content: `
          <f-input value="hello world"></f-input>
          <f-input value="hello world" readonly></f-input>
          <f-input value="hello world" disabled></f-input>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
