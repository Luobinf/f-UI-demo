<template>
  <div class="fCollapse">
    <slot></slot>
  </div>
</template>

<script>
  import Vue from 'vue'
  export default {
    name: `fCollapse`,
    data(){
      return {
        eventBus: new Vue()
      }
    },
    props: {
      selected: {
        type: Array
      },
      single: {
        type: Boolean,
        default: false
      }
    },
    provide(){
      return {
        eventBus: this.eventBus
      }
    },
    mounted(){
      this.eventBus.$emit(`update:selected`,this.selected)


      this.eventBus.$on(`update:addSelected`,(name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if(this.single === true){
          selectedCopy = [name]
        } else{
          selectedCopy.push(name)
        }
        this.eventBus.$emit(`update:selected`,selectedCopy)
        this.$emit(`update:selected`,selectedCopy)
      })

      this.eventBus.$on(`update:removeSelected`,(name) => {
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index,1)  //删除指定索引的元素
        this.eventBus.$emit(`update:selected`,selectedCopy)
        this.$emit(`update:selected`,selectedCopy)
      })
    }
  }
</script>

<style scoped lang="scss">
  $border-color: #dddddd;
  $border-radius: 4px;
  .fCollapse{
    border: 1px solid $border-color;
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }
</style>
