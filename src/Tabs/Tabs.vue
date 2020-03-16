<template>
  <div class="f-tabs">
    <div class="f-tabs-head" ref="head">
      <div class="f-tabs-item" v-for="(item, index) in TabsItems" :key="index" :class="tabsItemClasses(item)"
           @click="handleChange(index,$event)" ref="items" :data-name="item.name"
      >
        {{item.label}}
      </div>
      <div class="line" ref="line"></div>
    </div>
    <div class="f-tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Vue from "vue";
  export default {
    name: "fTabs",
    data() {
      return {
        eventBus: new Vue(),
        TabsItems: [],
        activeName: this.selected
      };
    },
    provide() {
      return {
        eventBus: this.eventBus
      };
    },
    props: {
      selected: {
        type: [String,Number],
        required: true
      }
    },
    methods: {
      initTabsItemsData() {
        this.eventBus.$on("update:TabsItems", (item) => {
          this.TabsItems.push(item)
        })
      },
      initSelectTab() {
        this.eventBus.$emit('update:selected',this.selected)
      },
      tabsItemClasses(item) {
        return {
          'is-active': item.name === this.activeName,
          'is-disabled': item.disabled
        }
      },
      handleChange(index,event) {
        let selectedTabItem = this.TabsItems[index]
        if(selectedTabItem.disabled) {
          return
        }
        //如果tab可以选中，才执行
        this.activeName = selectedTabItem.name
        this.eventBus.$emit('update:selected',selectedTabItem)
        //触发事件以更新外面的activeName值
        this.$emit('update:selected',selectedTabItem.name)
        this.$emit('tab-click',event)
      },
      updateLinePositionAndWidth(item) {
        this.$nextTick( () => {
          let headElementRect = this.$refs.head.getBoundingClientRect()
          let headLeft = headElementRect.left
          this.$refs.items.forEach((element) => {
            let elementDataName = element.getAttribute('data-name')
            if(elementDataName === item || elementDataName === item.name) {
              let {width,left} = element.getBoundingClientRect()
              this.$refs.line.style.width = `${width}px`
              // 需要给line设置偏移量
              this.$refs.line.style.left = left - headLeft + 'px'
            }
          })
        })
      },
      checkChildren() {
        this.$children.forEach((vm) => {
          if(vm.$options.name !== 'fTabsPane') {
            throw new Error(`f-tabs的子组件只能是f-tab-pane，而你不是这样做的`)
          }
        })
      }
    },
    created() {
      this.initTabsItemsData()
      this.eventBus.$on('update:selected',(name) => {
        this.updateLinePositionAndWidth(name)
      })
    },
    mounted() {
      this.checkChildren()
      this.initSelectTab()
    }
  };
</script>

<style scoped lang="scss">
  $font-size: 14px;
  .f-tabs {
    width: 600px;
    margin: 0 auto;
    .f-tabs-head {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #dddddd;
      font-size: $font-size;
      position: relative;
      .f-tabs-item {
        padding: 0.5em 1em;
        cursor: pointer;
        transition: all 0.5s;
        margin-right: 1em;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          color: #1890ff;
        }
        &.is-active {
          color: #1890ff;
          font-weight: bold;
        }
        &.is-disabled {
          cursor: not-allowed;
          color: rgba(0, 0, 0, 0.25);
        }
      }
      .line {
        height: 2px;
        background-color: #1890ff;
        position: absolute;
        bottom: 0;
        transition: all 0.5s;
      }
    }
    .f-tabs-content {
      margin-top: 1em;
    }
  }
</style>
