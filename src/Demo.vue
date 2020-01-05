<template>
  <div class="page">
    <p>{{selected && selected[0] && selected[0].name || '空'}}</p>
    <p>{{selected && selected[1] && selected[1].name || '空'}}</p>
    <p>{{selected && selected[2] && selected[2].name || '空'}}</p>
    <div style="padding: 50px;">
      <f-cascader :source="source" popover-height="200px" :selected="selected"
                   @update:selected="selected = $event"
      >
      </f-cascader>
    </div>

  </div>
</template>

<script type="text/javascript">
import fCascader from "./cascader";
import db from './db'

function ajax(parent_id = 0) {
  return db.filter((item) => {
    return item.parent_id === 0
  })
}
console.log(ajax())
export default {
  name: 'demo',
  data() {
    return {
      selected: [],
      source: ajax()
    };
  },
  components: {
    "f-cascader": fCascader
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
