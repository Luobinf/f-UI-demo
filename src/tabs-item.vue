<template>
  <div class="tabs-item" @click="changeSelect" :class="classes">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fTabsItem`,
  data(){
    return {
      active: false
    }
  },
  computed: {
    classes(){
      return {
        active: this.active,
        disabled: this.disabled
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
      if(this.disabled){
        return
      }
      this.eventBus.$emit('update:selected',this.name,this)
    }
  }
}
</script>

<style scoped lang="scss">
  $color: blue;
  .tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active{
      color: $color;
      font-weight: bold;
    }
    &.disabled{
      color: gray;
    }
  }
</style>
