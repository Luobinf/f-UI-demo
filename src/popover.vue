<template>
  <div class="f-popover" @click="xxx">
    <slot></slot>
    <div class="content-wrapper" v-if="visible">
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
      console.log(2222)
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
