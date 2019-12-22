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
    this.eventBus.$on(`update:selected`,(val) => {
      this.$emit(`update:selected`,val)
    })
  }
}
</script>

<style scoped lang="scss">
  .tabs{

  }
</style>
