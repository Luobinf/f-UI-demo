<template>
  <div style="padding-top: 20px;">
    <h3>基础用法</h3>
    <p>基础的、简洁的标签页。</p>
    <div style="display: inline-block;">
      <f-tabs :selected.sync="activeName" @tab-click="handleClick">
        <!--   name表示选项卡的别名   -->
        <f-tab-pane label="用户管理配置" name="first">用户管理</f-tab-pane>
        <f-tab-pane label="配置管理" name="second">配置管理</f-tab-pane>
        <f-tab-pane label="角色管理" name="third">角色管理</f-tab-pane>
        <f-tab-pane label="定时任务补偿" name="forth">定时任务补偿</f-tab-pane>
      </f-tabs>
    </div>
  </div>
</template>

<script type="text/javascript">
import fTabs from '../../../src/Tabs/Tabs.vue'
import fTabPane from '../../../src/Tabs/TabPane.vue'
export default {
  data () {
    return {
      activeName: 'third'
    }
  },
  components: {
    fTabs,
    fTabPane
  },
  methods: {
    handleClick() {

    }
  }
}
</script>

