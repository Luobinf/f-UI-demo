<template>
  <svg class="icon">
    <use :xlink:href=`#i-${name}`></use>
  </svg>
</template>

<script type="text/javascript">
  import './svg'
  export default {
    name: 'fjq-icon',
    props: ['name']
  }
</script>

<style scoped lang="scss">
  .icon {
    height: 1em;
    width: 1em;
  }
</style>
