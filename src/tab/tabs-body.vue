<template>
  <div class="tabs-content">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fTabsBody`,
  inject: ['eventBus'],
}
</script>

<style scoped lang="scss">
  .tabs-content{

  }
</style>
