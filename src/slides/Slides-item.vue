<template>
  <transition name="slide">
    <div class="f-slides-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    name: 'f-slides-item',
    data () {
      return {
        selected: undefined,
      }
    },
    computed: {
      visible() {
        return this.name === this.selected
      }
    },
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .f-slides-item {

  }
  .slide-enter-active,.slide-leave-active {
    transition: all 1s;
  }
  .slide-leave-active {
    position: absolute;
    left: 0;
    top: 0;
  }
  .slide-enter {
    transform: translateX(100%);
  }
  .slide-leave-to {
    transform: translateX(-100%);
  }
</style>
