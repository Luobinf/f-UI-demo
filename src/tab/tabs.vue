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
  methods: {
    checkChildren(){
      if(this.$children.length === 0) {
        console && console.warn && console.warn(`f-tabs的子组件应该是f-tabs-head和f-tabs-body`)
      }
    },
    selectTab() {
      this.$children.forEach( (vm) => {
        if(vm.$options.name === `fTabsHead`) {
          vm.$children.forEach( (item) => {
            if(item.$options.name === `fTabsItem` && item.name === this.selected){
              this.eventBus.$on(`update:selected`,(val) => {
                //监听事件，当selected的值发生改变时，通知外界让app.js的selectedTab值也进行更新
                this.$emit(`update:selected`,val)
              })
              this.eventBus.$emit(`update:selected`,this.selected,item)  //找到具体的item
            }
          })
        }
      })
    }
  },
  mounted() {
    this.checkChildren()
    this.selectTab()

  }
}
</script>

<style scoped lang="scss">
  .tabs{

  }
</style>
