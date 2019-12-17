<template>
  <div class="toast" ref="toast" :class="toastClasses">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <div class="line" v-if="closeButton" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose">
      {{closeButton.text}}
    </span>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: `fToast`,
    computed: {
      toastClasses() {
        return {[`position-${this.position}`]:true}
      }
    },
    props: {
      autoClose: {
        type: Boolean,
        default: true
      },
      autoCloseDelay:{
        type: Number,
        default: 30
      },
      closeButton: {
        type: Object,
        default: () => {
          return {
            text: `关闭`,
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
        default: `top`,
        validator(val){
          return ['top','middle','bottom'].indexOf(val) >= 0
        }
      }
    },
    mounted() {
      this.updateStyles()
      this.runAutoClose()

    },
    methods: {
      updateStyles(){
        this.$nextTick(() => {
          // this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
          // this.$refs.line.style.height = this.$refs.toast.style.height 不生效
          this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
        })
      },
      runAutoClose(){
        if(this.autoClose){
          setTimeout(() => {
            this.close()
          },1000*this.autoCloseDelay)
        }
      },
      close(){
        this.$el.remove()
        this.$emit(`close`)
        this.$destroy()
      },
      onClickClose(){
        this.close()
        if(this.closeButton && typeof this.closeButton.callback === 'function'){
          this.closeButton.callback(this)  //this为toast实例
        }
      },
      hi(){
        console.log(`hi`)
      }
    }
  }
</script>

<style scoped lang="scss">
  $font-size: 14px;
  $toast-min-height: 40px;
  $toast-bg:rgba(0,0,0,0.75);
  $border-radius: 4px;
  @keyframes fade-in {
    0%{
      opacity: 0;
      transform: translate(-50%,100%);
    }
    100%{
      opacity: 100%;
      transform: translate(-50%,0);
    }
  }
  .toast{
    animation: fade-in 1s;
    position: fixed;
    left: 50%;
    min-height: $toast-min-height;
    font-size: $font-size;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
    background-color: $toast-bg;
    color: white;
    padding: 0 16px;
    border-radius: $border-radius;
    .close{
      padding-left: 16px;
      flex-shrink: 0;
      cursor: pointer;
    }
    .line{
      border-left: 1px solid #666;
      height: 100%;
      margin-left: 16px;
    }
    .message{
      padding: 4px 0;
    }
    &.position-top{
       top: 0;
      transform: translate(-50%,0);
    }
    &.position-bottom{
      bottom: 0;
      transform: translate(-50%,0);
    }
    &.position-middle{
      top: 50%;
      transform: translate(-50%,-50%);
    }
  }
</style>

