<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fjq-row`,
  props: {
    gutter: {
      type: [Number,String]
    },
    align: {
      type: String,
      validator(value) {
        return ['left','right','center'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: `${-gutter/2}px`,
        marginRight: `${-gutter/2}px`
      }
    },
    rowClass() {
      let {align} = this
      return [align && `align-${align}`]
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
    flex-wrap: wrap;
    &.align-left{
     justify-content: flex-start;
    }
    &.align-right{
      justify-content: flex-end;
    }
    &.align-center{
      justify-content: center;
    }
  }

</style>
