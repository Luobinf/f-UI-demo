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
        type: Array,
        default() {
          return []
        }
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
        //通知外界 当前激活面板改变时触发change事件
        this.$emit('change',selectedCopy)
      })

      this.eventBus.$on(`update:removeSelected`,(name) => {
        //为什么这里要使用深拷贝，因为如果不用深拷贝的话那么就要直接修改父组件传递过来的数据，而这是不允许的。
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index,1)  //删除指定索引的元素
        this.eventBus.$emit(`update:selected`,selectedCopy)
        this.$emit(`update:selected`,selectedCopy)
        //通知外界 当前激活面板改变时触发change事件
        this.$emit('change',selectedCopy)
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
