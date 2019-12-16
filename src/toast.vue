<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: `fToast`
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-height: 40px;
  $toast-bg:rgba(0,0,0,0.75);
  .toast{
    position: fixed;
    top: 0;
    left: 50%;
    transform: translate(-50%,0);
    height: $toast-height;
    font-size: $font-size;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    background-color: $toast-bg;
    color: white;
    padding: 0 16px;
  }
</style>

