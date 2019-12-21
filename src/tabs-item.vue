<template>
  <div class="tabs-item" @click="xxx">
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
        if(name === this.name){
          console.log(`我${this.name}被选中了`)
        } else {
          console.log(`我${this.name}没有被选中`)
        }
      })
  },
  methods: {
    xxx() {
      this.eventBus.$emit('update:selected',this.name)
    }
  }
}
</script>

<style scoped lang="scss">
  .tabs-item{
      flex-shrink: 0;
    padding: 0 2em;
  }
</style>
