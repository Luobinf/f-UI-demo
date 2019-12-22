<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  inject: ['eventBus'],
  data(){
    return {
      active: false
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
      type: String || Number,
      required: true
    }
  },
  created() {
    this.eventBus.$on(`update:selected`,(name) => {
      this.active = name === this.name;
    })
  }
}
</script>

<style scoped lang="scss">
  .tabs-pane{
    &.active{
      background: red;
    }
  }
</style>
