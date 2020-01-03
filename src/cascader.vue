<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      <slot></slot>
    </div>
    <div class="popoverWrapper" v-if="popoverVisible">
     <f-cascader-item :items="source" class="popover" :height="popoverHeight">

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
    },
    popoverHeight: {
      type: String
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
    position: relative;
    .trigger {
      border: 1px solid black;
      height: 32px;
      width: 100px;
    }
    .popoverWrapper {
      display: flex;
      position: absolute;
      top: 100%;
      left: 0;
      background-color: white;
      @extend .box-shadow;
    }
  }
</style>
