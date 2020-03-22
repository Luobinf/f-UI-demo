<template>
  <div class="f-button-group">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'fButtonGroup',
    mounted() {
      for(let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if(name !== 'button') {
          throw new Error(`f-button-group的子元素应该全是f-button,但是你写了${name}`)
        }
      }
    }
  }
</script>


<style scoped lang="scss">
  .f-button-group{
    display: inline-flex;
    vertical-align: top;
    > .f-button{
      &:first-child{
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
      &:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
