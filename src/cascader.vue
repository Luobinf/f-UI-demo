<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      <slot></slot>
    </div>
    <div class="popoverWrapper" v-if="popoverVisible">
        <f-cascader-item :items="source" class="popover" :height="popoverHeight"
            :selected="selected" @update:selected="onUpdateSelected"
        >

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
    },
      selected: {
        type: Array,
          default: () => {
              return []
          }
      }
  },
  components: {
    fCascaderItem
  },
    methods: {
        onUpdateSelected(newSelected) {
            this.$emit('update:selected',newSelected)
        }
    }
}
</script>

<style scoped lang="scss">
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
          box-shadow: 0 0 5px rgba(0,0,0,0.3);
      }
  }
</style>
