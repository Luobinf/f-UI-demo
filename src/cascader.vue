<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      <slot></slot>
    </div>
    <div class="popover" v-if="popoverVisible">
     <f-cascader-item :items="source">

     </f-cascader-item>
    </div>
  </div>
</template>

<script type="text/javascript">
import fCascaderItem from './cascader-item'
export default {
  name: `fCascader`,
  data(){
    return {
      popoverVisible: false
    }
  },
  props: {
    source: {
      type: Array,
      validator(value){
        return Array.isArray(value)
      }
    }
  },
  components: {
    fCascaderItem
  }
}
</script>

<style scoped lang="scss">
  @import "var";
  .cascader {
    .trigger {
      border: 1px solid red;
      height: 32px;
      width: 100px;
    }
    .popover {
      border: 2px solid green;
      height: 200px;
      display: flex;
      .label {
        white-space: nowrap;
      }
    }
  }
</style>
