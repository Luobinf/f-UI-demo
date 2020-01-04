<template>
  <div class="page">
    <f-cascader :source="source" popover-height="200px"> </f-cascader>
  </div>
</template>

<script type="text/javascript">
import fCascader from "./cascader";
export default {
  data() {
    return {
      source: [
        {
          name: "浙江",
          children: [
            {
              name: "杭州",
              children: [
                {
                  name: "江干区"
                },
                {
                  name: "西湖区"
                },
                {
                  name: "滨江区"
                }
              ]
            },
            {
              name: "嘉兴",
              children: [
                {
                  name: "越秀区"
                },
                {
                  name: "嘉善"
                },
                {
                  name: "平湖区"
                }
              ]
            }
          ]
        },
        {
          name: "福建",
          children: [
            {
              name: "福州",
              children: [
                {
                  name: "1"
                },
                {
                  name: "2"
                },
                {
                  name: "3"
                }
              ]
            }
          ]
        }
      ]
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
