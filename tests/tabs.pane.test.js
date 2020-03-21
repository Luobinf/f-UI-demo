const expect = chai.expect;
import Vue from 'vue'
import TabsPane from '../src/tab/tabs-pane'



Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsPane', () => {
    it('存在.', () => {
        expect(TabsPane).to.be.exist
    })

    it('接受name属性', function () {
        const Constructor = Vue.extend(TabsPane)
        const vm = new Constructor({
            propsData: {
                name: `f`
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.equal('f')
    })
})
