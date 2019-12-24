<template>
  <div class="f-popover" @click="onClick" ref="popover">
    <div class="contentWrapper" v-if="visible" ref="contentWrapper">
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
        visible: false
      };
    },
    methods: {
      positionContent () {
        document.body.appendChild(this.$refs.contentWrapper)
        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
        this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
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
    transform: translateY(-100%);
    margin-top: -10px;
    max-width: 20em;
    word-break: break-all;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.5));
    background: white;
    &::before,&::after{
       content: '';
       display: block;
       border: 10px solid transparent;
       border-top-color: black;
       width: 0;
       height: 0;
       position: absolute;
       left: 10px;
       top: 100%;
     }
    &::after{
      border-top-color: white;
      top: calc(100% - 1px);
    }
  }
  .buttonWrapper{
    display: inline-block;
  }
</style>
