<template>
  <div class="cascaderItem" :style="{height:height}">
     <div class="left">
         <div class="label" v-for="item in items" @click="onClickLabel(item)">
             {{item.name}}
             <f-icon name="arrow-right" v-if="item.children"></f-icon>
         </div>
     </div>
      <div class="right" v-if="rightItems">
          <f-cascader-item :items="rightItems" :height="height" ref="right"
            :selected="selected" :level="level+1"
            @update:selected="onUpdateSelected"
          >

          </f-cascader-item>
      </div>
  </div>
</template>

<script type="text/javascript">
import Icon from './icon'
export default {
    name: `fCascaderItem`,
    components: {
      'f-icon': Icon
    },
    props: {
        items: {
            type: Array
         },
        height: {
            type: String
        },
        selected: {
            type: Array,
            default: () => []
        },
        level: {
            type: Number,
            default: 0
        }
    },
    computed: {
        rightItems(){
            let currentSelected = this.selected[this.level]
            if(currentSelected && currentSelected.children) {
                return currentSelected.children
            } else {
                return null
            }
        }
    },
    mounted() {

    },
    methods: {
        onClickLabel(value) {
            // Vue检测不到数组的变化
            // this.selected[this.level] = value
            // this.$set(this.selected,this.level,value)
            let copy = JSON.parse(JSON.stringify(this.selected))
            copy[this.level] = value
            copy.splice(this.level + 1)   //重点 一句话
            this.$emit('update:selected',copy)
        },
        onUpdateSelected(newSelected){
            this.$emit('update:selected',newSelected)
        }
    }
}

</script>

<style scoped lang="scss">
    .cascaderItem {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        /*先将高度写死*/
        height: 100px;


        .left {
            height: 100%;
            /*margin: 0.3em 0;*/
            overflow: auto;
        }

        .right {
            height: 100%;
            border-left: 1px solid #dddddd;
        }

        .label {
            white-space: nowrap;
            padding: 0.3em 1em;
            display: flex;
            align-items: center;

            .icon {
                margin-left: 1em;
                transform: scale(0.8);
            }
        }
    }
</style>
