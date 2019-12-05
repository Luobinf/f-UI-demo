<template>
  <div class="f-row" :style="RowStyle" :class="RowClass">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  computed: {
    RowStyle() {
      return {margin: `0 ${-this.gutter/2}px`}
    },
    RowClass() {
      let {justify,align} = this
      return [justify && `justify-content-${justify}`,
              align && `align-items-${align}`,
            ]
    }
  },
  props: {
    justify: {
      type: String,
      validator(value) {
        let type = ['start','center','space-between','space-around','end']
        return type.includes(value)
      }
    },
    align: {
      type: String,
      validator(value) {
        let type = ['top','center','bottom']
        return type.includes(value)
      }
    },
    gutter: {
      type: [String,Number]
    }
  },
  mounted() {
    // 父组件挂载到页面中，此时可以获取到子组件
    this.$children.forEach( (component) => {
      component.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="scss">
  .f-row{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    &.justify-content-start{
      justify-content: flex-start;
    }
    &.justify-content-center{
      justify-content: center;
    }
    &.justify-content-space-around{
      justify-content: space-around;
    }
    &.justify-content-space-between{
      justify-content: space-between;
    }
    &.justify-content-end{
      justify-content: flex-end;
    }

    &.align-items-top{
      align-items: flex-start;
    }
    &.align-items-center{
      align-items: center;
    }
    &.align-items-bottom{
      align-items: flex-end;
    }
  }
</style>
