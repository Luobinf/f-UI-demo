<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
    <div class="line" ref="line"></div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fTabsHead`,
  inject: ['eventBus'],
  data(){
    return {

    }
  },
  mounted() {
    this.eventBus.$on(`update:selected`, (item,vm) => {
        let {width,left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>

<style scoped lang="scss">
  $tab-height: 40px;
  .tabs-head{
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #dddddd;
    position: relative;
    > .actions-wrapper{
      margin-left: auto;
    }
    > .line{
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid #1890ff;
      transition: all 0.6s;
    }
  }
</style>
