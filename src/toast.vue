<template>
  <div class="f-toast-wrapper" :class="toastClasses">
    <div class="f-toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <template v-if="closeButton && closeButton.text">
        <div :class="line" ref="line"></div>
        <span v-if="closeButton && closeButton.text" class="close" @click="onClickClose">
          {{closeButton.text}}
        </span>
      </template>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'fToast',
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay: {
        type: Number,
        default: 1
      },
      closeButton: {
        type: Object,
        default() {
          return {
            text: '',
            callback: undefined
          }
        }
      },
      enableHtml: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'top',
        validator(val) {
          return ['top','middle','bottom'].indexOf(val) >= 0
        }
      }
    },
    computed: {
      toastClasses() {
        return {
          [`position-${this.position}`]: true
        }
      },
      line() {
        return {
          line: !!this.closeButton.text
        }
      }
    },
    mounted() {
      this.updateStyles()
      this.execAutoClose()
    },
    methods: {
      close() {
        this.$el.remove()
        this.$destroy() //解除vue实例上的事件等
      },
      onClickClose() {
        this.close()
        if (this.closeButton && this.closeButton.callback && typeof this.closeButton.callback === 'function') {
          this.closeButton.callback()
        }
      },
      execAutoClose() {
        if(this.autoClose) {
          setTimeout(() => {
            this.close()
          },this.autoCloseDelay * 1000)
        }
      },
      updateStyles() {
        this.$nextTick( () => {
          if(this.$refs.line) {
            this.$refs.line.style.height =  `${this.$refs.toast.getBoundingClientRect().height}px`
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 16px;
  $toast-min-height: 40px;
  $toast-bg: rgba(0,0,0,0.75);
  $animation-duration: 350ms;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slide-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes slide-down {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
  .f-toast-wrapper{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    &.position-top{
      top:0;
      .f-toast{
        animation: slide-down $animation-duration;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
    &.position-bottom{
      bottom: 0;
      .f-toast{
        animation: slide-up $animation-duration;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
    &.position-middle{
      top: 50%;
      transform: translate(-50%,-50%);
      .f-toast{
        animation: fade-in $animation-duration;
      }
    }
  }
  .f-toast{
    line-height: 1.8;
    font-size: $font-size;
    min-height: $toast-min-height;
    display: flex;
    align-items: center;
    background: $toast-bg;
    box-shadow: 0 0 3px 0 rgba(0,0,0,0.50);
    color: #ffffff;
    padding: 0 1em;
    border-radius: 6px;
    cursor: pointer;
    .close{
      margin-left: 1em;
      white-space: nowrap;
    }
    .line{
      border: 1px solid #666666;
      height: 100%;
      margin-left: 1em;
    }
    .message{
      padding: 0.4em 0;
    }
  }
</style>
