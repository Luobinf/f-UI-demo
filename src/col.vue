<template>
  <div class="f-col" :style="ColStyle" :class="ColClass">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      gutter: 0
    }
  },
  computed: {
    ColStyle() {
      return {padding: `0 ${this.gutter/2}px`}
    },
    ColClass() {
      let {span,offset,order} = this
      return [span && `col-span-${span}`,
              offset && `col-offset-${offset}`,
              order && `col-order-${order}`
            ]
    }
  },
  props: {
    span: {
      type: [String,Number]
    },
    offset: {
      type: [String,Number]
    },
    order: {
      type: [String,Number]
    }
  }
}
</script>

<style scoped lang="scss">
  .f-col{
    $class-prefix: col-span-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class-prefix: col-offset-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
    $class-prefix: col-order-;
    @for $n from 1 through 24{
      &.#{$class-prefix}#{$n} {
        order: $n;
      }
    }
  }
</style>
