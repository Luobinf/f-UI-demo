<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  inject: ['eventBus'],
  data(){
    return {
      active: false
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs-pane{

  }
</style>
