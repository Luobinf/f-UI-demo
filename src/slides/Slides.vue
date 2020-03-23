<template>
  <div class="f-slides">
    <div class="f-slides-window">
      <div class="f-slides-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="dots">
      <span class="dot"></span>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'f-slides',
    data () {
      return {

      }
    },
    props: {
      selected: {
        type: String
      }
    },
    mounted() {
      // let first = this.$children[0]
      // if(!this.selected) {
      //
      // }
      this.$children.forEach( (vm) => {
        vm.selected = this.selected
      })
    },
    updated() {
      this.$children.forEach( (vm) => {
        vm.selected = this.selected
      })
    }
  }
</script>

<style scoped lang="scss">
  .f-slides {
    border: 1px solid black;
    display: inline-block;
    .f-slides-window {
      overflow: hidden;
    }
    .f-slides-wrapper {
      position: relative;
    }
  }
</style>
