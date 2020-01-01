<template>
  <div class="fCollapsePanel">
    <div class="title" @click="toggle" ref="title">{{title}}</div>
    <template v-if="open">
      <div class="line"></div>
      <div class="content">
        <slot></slot>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: `fCollapsePanel`,
    data() {
      return {
        open: false
      }
    },
    props: {
      title: {
        type: String
      },
      name: {
        type: [String,Number]
      }
    },
    inject: [`eventBus`],
    methods: {
      toggle() {
        if(this.open){
          this.eventBus && this.eventBus.$emit(`update:removeSelected`,this.name)
        } else{
          this.eventBus && this.eventBus.$emit(`update:addSelected`,this.name)
        }
      }
    },
    mounted(){
      this.eventBus && this.eventBus.$on(`update:selected`,(names) => {
        if(names.indexOf(this.name) >= 0) {
          this.open = true
        }else{
          this.open = false
        }
      })
    }
  };
</script>

<style scoped lang="scss">
  $border-color: #dddddd;
  $color:rgba(0, 0, 0, 0.85);
  $border-radius: 4px;
  .fCollapsePanel {
    margin: -1px;
    border: 1px solid $border-color;
    color: $color;
    &:first-child {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
    .title{
      padding: 0.5em;
      cursor: pointer;
    }
    .line {
      border-top: 1px solid $border-color;
    }
    .content{
      padding: 1em;
    }
  }
</style>
