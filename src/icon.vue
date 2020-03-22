<template>
  <svg class="icon fIcon" aria-hidden="true">
    <use :xlink:href="`#i-${iconName}`"></use>
  </svg>
</template>

<script type="text/javascript">
  import './svg'
  export default {
    name: 'fIcon',
    props: {
      iconName: {}
    }
  }
</script>

<style scoped lang="scss">
  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
