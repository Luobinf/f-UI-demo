<template>
  <div class="page">
    {{sourceItem.name}}
    <f-cascader-item
            v-for="item in sourceItem.children"
            v-if="sourceItem.children"
            :sourceItem="item"
    >

    </f-cascader-item>
  </div>
</template>

<script type="text/javascript">
export default {
  name: `fCascaderItem`,
  props: {
    sourceItem: {
      type: Object
    }
  }
}

</script>

<style scoped lang="scss">
</style>
