<template>
  <div class="g-row" :class="[justify && `justify-content-${justify}`,
    align && `align-items-${align}`,
    ]" :style="{margin: `0 ${-gutter/2}px`}"
  >
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
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
      type: [String,Number],
      validator(value){
        return typeof value === 'string' || typeof value === 'number'
      }
    }
  },
  mounted() {
    this.$children.forEach( (component) => {
      component.gutter = this.gutter
    })
  }
}
</script>

<style scoped lang="scss">
  .g-row{
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
