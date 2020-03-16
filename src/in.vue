<template>
  <div class="f-toast-wrapper">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly" :class="{error: error}" @change="$emit('change',$event)"
           @focus="$emit('focus',$event)" @blur="$emit('blur',$event)" @input="$emit('input',$event.target.value)"
    >
    <template v-if="error">
      <icon name="error" class="error"></icon>
      <span class="errorInformation">{{error}}</span>
    </template>
  </div>
</template>

<script type="text/javascript">
import Icon from './icon'
export default {
  components: {
    icon: Icon
  },
  props: {
    value: {
      type: String,
    },
    disabled: {
      type:Boolean,
      default: false
    },
    readonly: {
      type:Boolean,
      default: false
    },
    error: {

    }
  }
}
</script>

<style scoped lang="scss">
  $height: 32px;
  $border-color: #999;
  $background-color: #ffffff;
  $border-radius: 4px;
  $font-size: 14px;
  $box-sizing: border-box;
  $border-hover-color: #666;
  $box-shadow-color: rgba(0,0,0,0.5);
  $color-disabled-and-readonly: #bbb;
  $red: #F1453D;
  .f-toast-wrapper{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: $font-size;
    > input{
      box-sizing: $box-sizing;
      height: $height;
      padding: 0 0.5em;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      outline: none;
      font-size: inherit;
      &:hover{
        border-color: $border-hover-color;
      }
      &:focus{
        box-shadow: inset 0 1px 3px $box-shadow-color;
      }
      &[disabled],&[readonly]{
        border-color: $border-color;
        color: $color-disabled-and-readonly;
        cursor: not-allowed;
      }
      &.error{
        border-color: $red;
      }
    }
    .error{
      fill:$red;
    }
    .errorInformation{
      color: $red;
    }
    > *:not(:last-child){
      margin-right: 0.5em;
    }
  }
</style>
