<template>
  <div class="f-popover" @click.stop="xxx">
    <slot></slot>
    <div class="content-wrapper" v-if="visible" @click.stop>
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
  components: {

  },
  methods: {
    xxx(){
      this.visible = !this.visible
      console.log(this.visible)
      let x = () => {
        this.visible = false
        console.log(this.visible)
        document.removeEventListener('click',x)  //当visible为false时，移除事件监听器
      }
      this.$nextTick( () => {
        if(this.visible === true) {
          document.addEventListener('click', x)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .f-popover{
    border: 1px solid red;
    display: inline-block;
    position: relative;
    .content-wrapper{
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid red;
    }
  }
</style>
