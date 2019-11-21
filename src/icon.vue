<template>
  <svg>
    <use v-bind:xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script type="text/javascript">
export default {
  props: ['name']
}
</script>

<style scoped lang="scss">
  .f-icon {
    height: 1em;
    width: 1em;
  }
</style>
