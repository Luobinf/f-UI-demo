<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fjq-row`,
  props: {
    gutter: {
      type: [Number,String]
    }
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: `${-gutter/2}px`,
        marginRight: `${-gutter/2}px`
      }
    }
  },
  mounted() {
    // 此时子组件已经挂载到了父组件上，并且父组件挂载到了页面中，此时可以获取到css的样式了
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="scss">
  .row{
    display: flex;
  }
</style>
