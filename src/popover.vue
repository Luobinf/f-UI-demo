<template>
  <div class="f-popover" @click.stop="xxx">
    <span ref="triggerWrapper" class="triggerWrapper">
        <slot></slot>
    </span>
    <div class="content-wrapper" v-if="visible" @click.stop ref="contentWrapper">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fPopover`,
  data () {
    return {
      visible: false
    }
  },
  methods: {
    xxx(){
      this.visible = !this.visible
      this.$nextTick( () => {
          document.body.append(this.$refs.contentWrapper)
          let {width,height,left,top} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.left = left + window.scrollX +`px`
          this.$refs.contentWrapper.style.top = top - height + window.scrollY + `px`
          console.log(width, height, left, top)
          let eventHandler = () => {
              this.visible = false
              document.removeEventListener('click',eventHandler)  //当visible为false时，移除事件监听器
          }
        if(this.visible === true) {
          document.addEventListener('click', eventHandler)
        }
      })
    }
  },
    mounted() {
        console.log(this.$refs.triggerWrapper)
    }
}
</script>

<style scoped lang="scss">
  .f-popover{
    border: 1px solid red;
    display: inline-block;
    position: relative;
      .triggerWrapper{
          display: inline-block;
      }
  }
  .content-wrapper{
      position: absolute;
      border: 1px solid red;
  }
</style>
