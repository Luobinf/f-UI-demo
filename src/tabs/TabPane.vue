<template>
  <div class="f-tabs-pane" v-show="active">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'fTabsPane',
    data () {
      return {
        active: false
      }
    },
    inject: ['eventBus'],
    props: {
      label: {
        type: [String,Number],
        required: true
      },
      name: {
        type: [String,Number],
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    created() {
      if(this.eventBus) {
        this.eventBus.$on('update:selected',(item) => {
          this.active = item.name === this.name || item === this.name
        })
      }
    },
    mounted() {
      if(this.eventBus) {
        this.eventBus.$emit('update:TabsItems',{
          label: this.label,
          name: this.name,
          disabled: this.disabled
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
