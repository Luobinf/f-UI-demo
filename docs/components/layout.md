---
title: Layout
---
# Layout 布局
用于快速的布局

<ClientOnly>
  <layout-demo-1></layout-demo-1>
  <layout-demo-2></layout-demo-2>
</ClientOnly>


代码

```JS
<template>
    <f-layout style="height: 100vh;">
      <f-sider style="background-color: #ff4d4f">sider</f-sider>
      <f-layout>
        <f-header style="background-color: orange">header</f-header>
        <f-main style="background-color: skyblue">main</f-main>
        <f-footer style="background: blue;">footer</f-footer>
      </f-layout>
    </f-layout>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {}
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

```
