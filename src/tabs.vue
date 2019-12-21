<template>
  <div class="tabs">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
export default {
  name: `fTabs`,
  props: {
    selected: {
      type: String,
      required: true
    },
    direction: {
      type: String,
      default: `horizontal`,
      validator(value){
        return [`horizontal`,`vertical`].indexOf(value) >= 0
      }
    }
  },
  data(){
    return{
      eventBus: new Vue()
    }
  },
  provide(){
    return{
      eventBus: this.eventBus
    }
  },
  mounted() {
    this.eventBus.$emit(`update:selected`,this.selected)
    console.log(this.selected)
  }
}
</script>

<style scoped lang="scss">
  .tabs{

  }
</style>
