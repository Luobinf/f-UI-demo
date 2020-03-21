<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible=!popoverVisible">
      {{result || '请选择'}}
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
    },
    computed: {
      result() {
          return this.selected.map( (item) => item.name).join('/')
      }
    }
}
</script>

<style scoped lang="scss">
  .cascader {
      position: relative;

      .trigger {
          height: 2em;
          min-width: 10em;
          display: inline-flex;
          align-items: center;
          padding: 0.2em 1em;
          border: 1px solid black;
          border-radius: 4px;
      }

      .popoverWrapper {
          display: flex;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          box-shadow: 0 0 5px rgba(0,0,0,0.3);
          margin-top: 5px;
      }
  }
</style>
