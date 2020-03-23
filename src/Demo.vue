<template>
  <div class="page">
    <fSlides :selected
                     ="selected">
      <fSlidesItem name="1">
        <div class="box">
          1
        </div>
      </fSlidesItem>
      <fSlidesItem name="2">
        <div class="box">
          2
        </div>
      </fSlidesItem>
      <fSlidesItem name="3">
        <div class="box">
          3
        </div>
      </fSlidesItem>
    </fSlides>
  </div>
</template>

<script type="text/javascript">
import fSlides from './slides/Slides.vue'
import fSlidesItem from './slides/Slides-item.vue'
export default {
  name: 'demo',
  data() {
    return {
      selected: '1'
    }
  },
  components: {
    fSlides,
    fSlidesItem
  },
  created() {
    setInterval( () => {
      this.selected = '2'
    },2000)
  }
}
</script>

<style scoped lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .box {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    border: 1px solid red;
  }
</style>
