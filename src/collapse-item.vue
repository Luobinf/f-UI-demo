<template>
  <div class="collapseItem">
    <div class="title" @click="toggle">
      {{title}}
    </div>
    <div class="content" v-if="open">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fCollapseItem`,
  data(){
    return {
      open: false
    }
  },
  props: {
    title: {
      type: String || Number,
      required: true
    }
  },
  inject: ['eventBus'],
  methods: {
    toggle() {
      if(this.open){
        this.open = false
      } else {
        this.open = true
        this.eventBus && this.eventBus.$emit(`update:selected`,this)
      }
    },
    close(){
      this.open = false
    }
  },
  mounted() {
    this.eventBus && this.eventBus.$on(`update:selected`, (vm) => {
      /*这里的this指的是一开始挂载到页面中的collapse-item*/
      // console.log(this)
      if(vm !== this){
        this.close()
      }
    })
  }
}
</script>

<style scoped lang="scss">
  .collapseItem{
    > .title{
      border: 1px solid #dddddd;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 2em;
      display: flex;
      align-items: center;
      padding: 0 .5em;
    }
    &:first-child{
      > .title{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }
    }
    &:last-child{
      > .title:last-child{
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }
    .content{
      padding: 0.5em;
      border-bottom: 1px solid #dddddd;
    }
  }
</style>
