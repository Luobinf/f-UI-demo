<template>
  <div class="f-toast-wrapper" :class="{'error': error}">
    <input type="text" :value="value" :disabled="disabled" :readonly="readonly"
           @change="$emit('change',$event.target.value)"
           @input="$emit('input',$event.target.value)" @focus="$emit('focus',$event.target.value)"
           @blur="$emit('blur',$event.target.value)"
    >
    <template v-if="error">
      <icon icon-name="error" class="icon-error"></icon>
      <span class="errorMessage">{{error}}</span>
    </template>
  </div>
</template>

<script type="text/javascript">
  import Icon from './icon'

  export default {
    name: 'fInput',
    components: {
      icon: Icon
    },
    props: {
      value: {
        type: [String,Number]
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
  $height: 32px;
  $border-color: #999;
  $border-color-hover: #666;
  $border-radius: 4px;
  $font-size: 14px;
  $box-shadow-color: rgba(0, 0, 0, 0.5);
  $red: #F1453D;
  .f-toast-wrapper {
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    > :not(:last-child) {
      margin-right: 0.5em;
    }

    > input {
      height: $height;
      border: 1px solid $border-color;
      padding: 0 8px;
      font-size: inherit;
      border-radius: $border-radius;

      &:hover {
        border-color: $border-color-hover;
      }

      &:focus {
        outline: none;
        box-shadow: inset 0 1px 3px $box-shadow-color;
      }

      &[disabled], &[readonly] {
        border-color: #bbbbbb;
        color: #bbbbbb;
        cursor: not-allowed;
      }
    }

    &.error {
      > input {
        border-color: $red;
      }
    }

    .icon-error {
      fill: $red;
    }

    .errorMessage {
      color: $red;
    }
  }
</style>
