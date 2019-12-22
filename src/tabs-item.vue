<template>
  <div class="tabs-item" @click="changeSelect" :class="classes">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  data(){
    return {
      active: false
    }
  },
  computed: {
    classes(){
      return {
        active: this.active
      }
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String || Number,
      required: true
    }
  },
  inject: ['eventBus'],
  created(){
      this.eventBus.$on('update:selected',(name) => {
        this.active = name === this.name
      })
  },
  methods: {
    changeSelect() {
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs-item{
    flex-shrink: 0;
    padding: 0 2em;
    &.active{
      background: red;
    }
  }
</style>
