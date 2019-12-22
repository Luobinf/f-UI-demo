const expect = chai.expect;
import Vue from 'vue'
import TabsItem from '../src/tabs-item'



Vue.config.productionTip = false
Vue.config.devtools = false


describe('TabsItem', () => {
    it('存在.', () => {
        expect(TabsItem).to.be.exist
    })

    it('接受name属性', function () {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
               name: `f`
            }
        }).$mount()
       expect(vm.$el.getAttribute('data-name')).to.equal('f')
    })
    it('接受disabled属性', function () {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'fff',
                disabled: true
            }
        }).$mount()
        const callback = sinon.fake()
        vm.$on('click',callback)
        vm.$el.click()
        expect(callback).to.have.been.not.called

    })
})
