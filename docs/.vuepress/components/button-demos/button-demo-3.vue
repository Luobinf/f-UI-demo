<template>
  <div style="padding-top: 16px;">
    <h3>按钮组</h3>
    <p>以按钮组的方式出现，常用于多项类似操作。</p>
    <div>
      <f-button-group>
        <f-button>上一页</f-button>
        <f-button>下一页</f-button>
      </f-button-group>
    </div>
    <p>
      代码
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import fButton from '../../../src/Button/button'
  import fButtonGroup from '../../../src/Button/button-group'
  export default {
    components: {
      fButton,
      fButtonGroup
    },
    data () {
      return {
        content: `
          <f-button-group>
            <f-button>上一页</f-button>
            <f-button>下一页</f-button>
          </f-button-group>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>
