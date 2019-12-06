import Col from '../src/col'
import Vue from 'vue'
const expect = chai.expect


describe('Col',() => {
    it('存在', () => {
        expect(Col).to.be.exist
    })
    it('接收span属性',() => {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                span: 12
            }
        }).$mount(oDiv)
        console.log(vm.$el)
        expect(vm.$el.width).to.equal('50%')
    })
})


