<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fTabs`,
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: `horizontal`,
      validator(value){
        return [`horizontal`,`vertical`].indexOf(value) >= 0
      }
    }
  },
  created() {
    // this.$emit(`update:selected`,`xxx`)
  }
}
</script>

<style scoped lang="scss">
  .tabs{

  }
</style>
