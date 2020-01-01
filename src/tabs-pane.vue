<template>
  <div class="tabs-pane" :class="classes" v-if="active" :data-name="name">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fTabsPane`,
  inject: ['eventBus'],
  data(){
    return {
      active: true
    }
  },
  computed: {
    classes() {
      return {
        active: this.active
      }
    }
  },
  props: {
    name: {
      type: [String,Number],
      required: true
    }
  },
  created() {
    if(this.eventBus){
      this.eventBus.$on(`update:selected`,(name) => {
        this.active = name === this.name;
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs-pane{
    padding: 1em;
    &.active{
      padding: 1em;
    }
  }
</style>
