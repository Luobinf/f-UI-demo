<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
import Vue from 'vue'
export default {
  name: `fCollapse`,
  data(){
    return {
      eventBus: new Vue()
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false
    }
  },
  provide(){
    if(this.single){
      return {
        eventBus: this.eventBus
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .collapse{
    border: 1px solid #dddddd;
    border-radius: 4px;
    border-bottom: none;
  }
</style>
