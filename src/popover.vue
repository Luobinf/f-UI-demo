<template>
  <div class="f-popover" ref="popover">
    <div class="contentWrapper" v-if="visible" ref="contentWrapper" :class="{[`position-${position}`]:true}">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" class="buttonWrapper">
        <slot></slot>
    </span>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
    props: {
      position: {
        type: String,
        default: `top`,
        validator(val) {
          return ['top','bottom','left','right'].indexOf(val) >= 0
        }
      },
      trigger: {
        type: String,
        default: `click`,
        validator(val){
          return [`click`,`hover`].indexOf(val) >= 0
        }
      }
    },
    mounted(){
      if(this.trigger === 'click'){
        this.$refs.popover.addEventListener('click',this.onClick)
      } else {
        this.$refs.popover.addEventListener('mouseenter',this.open)
        this.$refs.popover.addEventListener('mouseleave',this.close)
      }
    },
    methods: {
      positionContent () {
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        let height2 = this.$refs.contentWrapper.getBoundingClientRect().height
        let positions = {
          top: {
            left: left + window.scrollX,
            top: top + window.scrollY
          },
          bottom: {
            left: left + window.scrollX,
            top: top + height + window.scrollY
          },
          left: {
            left: left + window.scrollX,
            top: top + (height-height2)/2 + window.scrollY
          },
          right: {
            left: left + width + window.scrollX,
            top: top + (height-height2)/2 + window.scrollY
          }
        }
        this.$refs.contentWrapper.style.left = positions[this.position].left + `px`
        this.$refs.contentWrapper.style.top = positions[this.position].top + `px`
      },
      onClickDocument (e) {
        if (this.$refs.popover &&
                (this.$refs.popover === e.target || this.$refs.popover.contains(e.target))
        ) { return }
        if (this.$refs.contentWrapper &&
                (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))
        ) { return }
        this.close()
      },
      open () {
        this.visible = true
        this.$nextTick(() => {
          this.positionContent()
          document.addEventListener('click', this.onClickDocument)
        })
      },
      close () {
        this.visible = false
        document.removeEventListener('click', this.onClickDocument)
      },
      onClick (event) {
        if (this.$refs.triggerWrapper.contains(event.target)) {
          if (this.visible === true) {
            this.close()
          } else {
            this.open()
          }
        }
      }
    },
    destroyed() {
      if(this.trigger === 'click'){
        this.$refs.popover.removeEventListener('click',this.onClick)
      } else {
        this.$refs.popover.removeEventListener('mouseenter',this.open)
        this.$refs.popover.removeEventListener('mouseleave',this.close)
      }
    }
  };
</script>

<style scoped lang="scss">
  $border-color: #333;
  $border-radius: 4px;
  .f-popover {
    display: inline-block;
    position: relative;
  }
  .contentWrapper {
    border: 1px solid $border-color;
    position: absolute;
    padding: 0.5em 1em;
    border-radius: $border-radius;
    max-width: 20em;
    word-break: break-all;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
    background: white;
    &::before,&::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      width: 0;
      height: 0;
      position: absolute;
    }
    &.position-top{
      transform: translateY(-100%);
      margin-top: -10px;
      &::before,&::after{
        border-bottom: none;
        left: 10px;
      }
      &::before{
        border-top-color: black;
        top: 100%;
      }
      &::after{
        border-top-color: white;
        top: calc(100% - 1px);
      }
    }
    &.position-bottom{
      margin-top: 10px;
      &::before,&::after{
        border-top: none;
        left: 10px;
      }
      &::before{
        border-bottom-color: black;
        bottom: 100%;
      }
      &::after{
        border-bottom-color: white;
        bottom: calc(100% - 1px);
      }
    }
    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before,&::after{
        border-right: none;
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        border-left-color: black;
        left: 100%;
      }
      &::after{
        border-left-color: white;
        left: calc(100% - 1px);
      }
    }
    &.position-right{
      margin-left: 10px;
      &::before,&::after{
        border-left: none;
        transform: translateY(-50%);
        top: 50%;
      }
      &::before{
        border-right-color: black;
        right: 100%;
      }
      &::after{
        border-right-color: white;
        right: calc(100% - 1px);
      }
    }

  }
  .buttonWrapper{
    display: inline-block;
  }
</style>
