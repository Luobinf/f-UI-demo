<template>
 <div class="f-button-group">
   <slot></slot>
 </div>
</template>

<script type="text/javascript">
export default {
    name: 'fjq-button-group',
  mounted() {
    for(let node of  this.$el.children) {
      let name = node.nodeName.toLowerCase()
      if (name !== 'button') {
        console.warn(`f-button-group的子元素应该全是f-button,但是你写的的是${name}`)
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
      border-radius: 0;
      &:not(:first-child){
          margin-left: -1px;
      }
      &:first-child{
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      &:last-child{
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
      &:hover{
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
