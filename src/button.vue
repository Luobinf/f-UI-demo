<template>
<!--  iconPosition是一个变量-->
  <button class="f-button" :class="{[`icon-${iconPosition}`]:true}">
    <svg class="icon" v-if="icon">
      <use v-bind:xlink:href=`#i-${icon}`></use>
    </svg>
    <div class="content">
      <slot>按钮</slot>
    </div>
  </button>
</template>

<script type="text/javascript">
export default {
  // props: ['icon','iconPosition']
    props: {
        icon: {},
        iconPosition: {
            type: String,
            default: 'left',
            //prop属性校验器
            validator: function (value) {
                //value为用户传给子组件的值，如果值不符合，vue就会发出一个警告
                return !(value !== 'left' && value !== 'right')
            }
        }
    }
}
</script>

<style scoped lang="scss">
  .f-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: top;
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
    /*用css来控制icon的方向*/
    > .icon{
      order: 1;
      margin-right: 0.3em;
    }
    > .content{
      order: 2;
    }
    &.icon-right {
      > .icon{
        order: 2;
        margin-right: 0;
        margin-left: 0.3em;
      }
      > .content{
        order: 1;
      }
    }
  }
</style>
