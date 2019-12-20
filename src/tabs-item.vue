<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs-item{

  }
</style>
