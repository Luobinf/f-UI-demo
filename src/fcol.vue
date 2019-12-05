<template>
  <div class="g-col" :class="[span && `col-span-${span}`,offset && `col-offset-${offset}`,order && `col-order-${order}`]"
    :style="{padding: `0 ${gutter/2}px`}"
  >
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
  props: {
    span: {
      type: [String,Number],
      validator(value) {
        if (typeof value === 'number' || typeof value === 'string') {
          return true
        } else {
          return false
        }
      }
    },
    offset: {
      type: [String,Number],
      validator(value) {
        if (typeof value === 'number' || typeof value === 'string') {
          return true
        } else {
          return false
        }
      }
    },
    order: {
      type: [String,Number],
      validator(value) {
        if (typeof value === 'number' || typeof value === 'string') {
          return true
        } else {
          return false
        }
      }
    },
  }
}
</script>

<style scoped lang="scss">
  .g-col{
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
