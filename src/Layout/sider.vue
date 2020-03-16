<template>
  <transition name="slide">
    <div class="sider" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script type="text/javascript">
  export default {
    name: `fSider`,
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
</style>
