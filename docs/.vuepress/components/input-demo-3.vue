<template>
  <div style="padding-top: 16px;">
    <h2>支持双向绑定</h2>
    <f-input v-model="value"></f-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>
<script>
  import fInput from '../../../src/input'

  export default {
    components: {fInput},
    data () {
      return {
        value: 'hello'
      }
    }
  }
</script>
