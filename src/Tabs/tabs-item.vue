<template>
  <div class="tabs-item" @click="changeSelect" :class="classes" :data-name="name">
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
      type: [String,Number],
      required: true
    }
  },
  inject: ['eventBus'],
  created(){
      if (this.eventBus){
        this.eventBus.$on('update:selected',(name) => {
          this.active = name === this.name
        })
      }
  },
  methods: {
    changeSelect() {
      if(this.disabled){
        return
      }
      this.eventBus && this.eventBus.$emit('update:selected',this.name,this)
    }
  }
}
</script>

<style scoped lang="scss">
  $color: #1890ff;
  $hover-color: #40a9ff;
  .tabs-item{
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &:hover{
      color: $hover-color;
    }
    &.active{
      color: $color;
      font-weight: bold;
    }
    &.disabled{
      color: gray;
      cursor: not-allowed;
    }
  }
</style>
