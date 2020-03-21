<template>
  <div class="page">
    <p>{{selected && selected[0] && selected[0].name || '空'}}</p>
    <p>{{selected && selected[1] && selected[1].name || '空'}}</p>
    <p>{{selected && selected[2] && selected[2].name || '空'}}</p>
    <div style="padding: 50px;">
      <f-cascader :source="source" popover-height="200px" :selected.sync="selected"
                   @update:selected="xxx" :load-data="loadData"
      >
      </f-cascader>
    </div>

    <f-button :loading="true"></f-button>
    <hr>
    <f-button-group>
      <f-button></f-button>
      <f-button></f-button>
    </f-button-group>
    <f-input error="kl">

    </f-input>
    <f-input></f-input>
  </div>
</template>

<script type="text/javascript">
import fCascader from "./cascader/cascader";
import db from './db';
import fButton from './button/button'
import fButtonGroup from './button/button-group'
import fInput from './input'

function ajax1(parent_id = 0,success) {
  let id = setTimeout(() => {
    let result = db.filter((item) => {
      return item.parent_id === parent_id
    })
    success(result)
  },1000)
  return id
}

function ajax2(parent_id = 0) {
  return new Promise((resolve,reject) => {
    let result = db.filter((item) => {
      return item.parent_id === parent_id
    })
    resolve(result)
  })
}
export default {
  name: 'demo',
  data() {
    return {
      selected: [],
      source: []
    };
  },
  components: {
    fCascader
  },
  created() {
    ajax2(0).then((result) => {
      this.source = result
      // console.log(this.source)
    })
  },
  methods: {
    xxx() {
      ajax2(this.selected[0].id).then((result) => {
        let lastLevelSelected = this.source.filter((item) => {
          return item.id === this.selected[0].id
        })[0]
        // console.log(lastLevelSelected)
        // lastLevelSelected.children = result
        this.$set(lastLevelSelected,'children',result)
        // console.log(this.source)
      })
    },
    loadData(node,fn) {
      let id = node.id
      ajax2(id).then(result => {
        fn(result)   //别人传给我的函数，我需要在这里调用一下
      })
    }
  }
};
</script>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  body {
    font-size: var(--font-size);
  }
</style>
