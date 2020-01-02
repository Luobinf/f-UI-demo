<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <f-cascader-item :sourceItem="item"></f-cascader-item>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import fCascaderItem from './cascader-item'
export default {
  name: `fCascader`,
  props: {
    source: {
      type: Array,
      validator(value){
        return Array.isArray(value)
      }
    }
  },
  data () {
    return {

    }
  },
  components: {
    fCascaderItem
  }
}
</script>

<style scoped lang="scss">
  @import "var";
  .cascader{

  }
</style>
