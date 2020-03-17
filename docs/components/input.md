---
title: Input
---
# Input输入框

<ClientOnly>
  <input-demo-1></input-demo-1>
  <input-demo-2></input-demo-2>
  <input-demo-3></input-demo-3>
</ClientOnly>

代码
```JS
<template>
  <div>
    <f-input v-model="value"></f-input>
      value: {{value}}
  </div>
</template>
<script>
  export default {
    components: {fInput},
    data () {
      return {
        value: 'hello',
      }
    }
  }
</script>
```
