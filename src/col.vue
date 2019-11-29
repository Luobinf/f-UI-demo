<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'fjq-col',
  props: {
    span: {
      type: [Number,String]
    }
  }
}
</script>

<style scoped lang="scss">
  .col{
    width: 50%;
    height: 100px;
    background-color: blue;
    border: 1px solid red;
    $class: col-;
    @for $n from 1 through 24{
      /* .col.col-1 .col.col-2 */
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
  }
</style>
