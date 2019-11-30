<template>
  <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
    :style="{paddingLeft: `${gutter/2}px`,paddingRight: `${gutter/2}px`}"
  >
    <div style="border: 1px solid black;">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'fjq-col',
  props: {
    span: {
      type: [Number,String],
    },
    offset: {
      type: [Number,String]
    }
  },
  data(){
    return {
      gutter: 0
    }
  }
}
</script>




<style scoped lang="scss">
  .col{
    width: 50%;
    height: 100px;
    /*background-color: skyblue;*/
    /*border: 1px solid red;*/
    /*margin: 0 10px;*/
    /*padding: 0 10px;*/
    $class: col-;
    @for $n from 1 through 24{
      /* .col.col-1 .col.col-2 */
      &.#{$class}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
    $class: offset-;
    @for $n from 1 through 24{
      /* .col.col-1 .col.col-2 */
      &.#{$class}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
  }
</style>
