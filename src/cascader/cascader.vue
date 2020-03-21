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
    data() {
      return {
        popoverVisible: false
      }
    },
    props: {
      source: {
        type: Array,
        validator(value) {
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
      },
      loadData: {
        type: Function
      }
    },
    components: {
      fCascaderItem
    },
    methods: {
      onUpdateSelected(newSelected) {
        this.$emit('update:selected', newSelected)
        let lastItem = newSelected[newSelected.length - 1]
        let simplest = (children,id) => {
          return children.filter(item => item.id === id)[0]
        }
        let complex = (children,id) => {
          let noChildren = []
          let hasChildren = []
          children.forEach(item => {
            if(item.children) {
              hasChildren.push(item)
            } else {
              noChildren.push(item)
            }
            let found = simplest(noChildren,id)
            if(found) {
              return found
            } else {
              return hasChildren.length > 0 ? complex(hasChildren,id) : undefined
            }
          })
        }
        let updateSource = (result) => {
          // console.log(this.source) //去哪里找
          // console.log(lastItem.id)
          let comp = complex(this.source,lastItem.id)
          console.log(comp)
          let upDate = this.source.filter(item => item.id === lastItem.id)[0]
          this.$set(upDate, 'children', result)
        }
        this.loadData(lastItem, updateSource) //调回调的时候传入一个函数
      }
    },
    computed: {
      result() {
        return this.selected.map((item) => item.name).join('/')
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
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
      margin-top: 5px;
    }
  }
</style>
