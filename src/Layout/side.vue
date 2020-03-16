<template>
  <transition name="slide">
    <div class="side" v-if="visible">
      <slot></slot>
      <button @click="hide">close</button>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    name: `fSide`,
    data(){
      return {
        visible: true
      }
    },
    methods: {
      hide(){
        this.visible = false
      },
    }
  }
</script>

<style scoped lang="scss">
  .side{
    position: relative;
    > button{
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .slide-enter-active, .slide-leave-active {
    transition: all .5s;
  }
  .slide-enter, .slide-leave-to{
    margin-left: -200px;
  }
</style>
