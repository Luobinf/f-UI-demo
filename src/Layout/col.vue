<template>
  <div class="f-col" :style="ColStyle" :class="ColClass" >
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
function validator(obj) {
  let arr = ['span','offset','order']
  let keys = Object.keys(obj)
  let valid = true
  keys.forEach((val) => {
    if(!arr.includes(val)) {
      valid = false
    }
  })
  return valid
}

export default {
  data () {
    return {
      gutter: 0
    }
  },
  methods: {
    getClasses(obj,name = '') {
      if(!obj) {
        return []
      }
      let arr = []
      if(obj.span){
        arr.push(`col-${name}span-${obj.span}`)
      }
      if (obj.offset) {
        arr.push(`col-${name}offset-${obj.offset}`)
      }
      if (obj.order) {
        arr.push(`col-${name}order-${obj.order}`)
      }
      return arr
    }
  },
  computed: {
    ColStyle() {
      return {padding: `0 ${this.gutter/2}px`}
    },
    ColClass() {
      let {span,offset,order,ipad,pc} = this
      return [
              ...this.getClasses({span,offset,order}),
              ...this.getClasses(ipad,'ipad-'),
              ...this.getClasses(pc,'pc-')
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
    },
    phone: {
      type: Object,
      validator
    },
    ipad: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    }
  }
}
</script>

<style scoped lang="scss">
  /* 默认是phone样式，也就是移动端优先 */
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
  /* ipad样式 */
  @media (min-width: 415px) {
    .f-col{
      $class-prefix: col-ipad-span-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: col-ipad-offset-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
      $class-prefix: col-ipad-order-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n} {
          order: $n;
        }
      }
    }
  }
  /* pc样式 */
  @media (min-width: 769px) {
    .f-col{
      $class-prefix: col-pc-span-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: col-pc-offset-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
      $class-prefix: col-pc-order-;
      @for $n from 1 through 24{
        &.#{$class-prefix}#{$n} {
          order: $n;
        }
      }
    }
  }
</style>
