<template>
  <div class="cascaderItem" :style="{height:height}">
     <div class="left">
         <div class="label" v-for="item in items" @click="leftSelected = item">
             {{item.name}}
             <f-icon name="arrow-right"></f-icon>
         </div>
     </div>
      <div class="right" v-if="rightItems">
          <f-cascader-item :items="rightItems" :height="height">

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
        }
    },
    data() {
        return {
            leftSelected: null
        }
    },
    computed: {
        rightItems(){
            if(this.leftSelected && this.leftSelected.children) {
                return this.leftSelected.children
            } else {
                return null
            }
        }
    }
}

</script>

<style scoped lang="scss">
    @import "var";
    .cascaderItem {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        /*先将高度写死*/
        height: 100px;
        .left {
            height: 100%;
            padding: 0.3em 0;
        }
        .right {
            height: 100%;
            border-left: 1px solid #dddddd;
        }
        .label{
            white-space: nowrap;
            padding: 0.3em 1em;
            display: flex;
            align-items: center;
            .icon{
                margin-left: 1em;
                transform: scale(0.8);
            }
        }
    }
</style>
