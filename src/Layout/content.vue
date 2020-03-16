<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: `fContent`
  }
</script>

<style scoped lang="scss">
  .content{
    flex-grow: 1;
  }
</style>

