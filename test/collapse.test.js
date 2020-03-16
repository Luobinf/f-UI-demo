import fCollapse from '../src/Collapse/collapse.vue'
import fCollapseItem from '../src/Collapse/collapse-item.vue'
import Vue from 'vue'

const expect = chai.expect;


Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('f-collapse',fCollapse)
Vue.component('f-collapse-item',fCollapseItem)

describe('测试fCollapse组件',() => {
  it('fCollapse存在',() => {
    expect(fCollapse).to.be.exist
  })
  it('可以接受selected',(done) => {
    const div = document.createElement('div')
    document.body.append(div)

    div.innerHTML = `
      <f-collapse :selected.sync="collapseTab" single>
          <f-collapse-item title="标题1" name="1">内容1</f-collapse-item>
          <f-collapse-item title="标题2" name="2">内容2</f-collapse-item>
          <f-collapse-item title="标题3" name="3">内容3</f-collapse-item>
    </f-collapse>
                        `

    let vm = new Vue({
      el: div,
      data() {
        return {
          collapseTab: '1'
        }
      }
    })
    setTimeout( () => {
      let select = vm.$el.querySelector('.content-wrapper')
      expect(getComputedStyle(select).display).to.equal('block')
      vm.$el.remove()
      vm.$destroy()
      done()
    },0)
  })
})
