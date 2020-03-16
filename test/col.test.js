import Col from '../src/Layout/col'
import Vue from 'vue'
const expect = chai.expect


describe('Col',() => {
    it('存在', () => {
        expect(Col).to.be.exist
    })
    it('接收 span 属性',() => {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                span: 12
            }
        }).$mount(oDiv)
        expect(vm.$el.classList.contains('col-span-12')).to.equal(true)
        oDiv.remove()
        vm.$destroy()
    })
    it('接收 order 属性',() => {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                order: 1
            }
        }).$mount(oDiv)
        expect(vm.$el.classList.contains('col-order-1')).to.equal(true)
        oDiv.remove()
        vm.$destroy()
    })
    it('接收 offset 属性',() => {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(oDiv)
        expect(vm.$el.classList.contains('col-offset-1')).to.equal(true)
        oDiv.remove()
        vm.$destroy()
    })
    it('接收 ipad 属性',() => {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                ipad: {
                    span: 10,
                    offset: 2,
                    order: 3
                }
            }
        }).$mount(oDiv)
        expect(vm.$el.classList.contains('col-ipad-span-10')).to.equal(true)
        expect(vm.$el.classList.contains('col-ipad-offset-2')).to.equal(true)
        expect(vm.$el.classList.contains('col-ipad-order-3')).to.equal(true)
        oDiv.remove()
        vm.$destroy()
    })
    it('接收 pc 属性',() => {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        let Constructor = Vue.extend(Col)
        let vm = new Constructor({
            propsData: {
                pc: {
                    span: 10,
                    offset: 2,
                    order: 3
                }
            }
        }).$mount(oDiv)
        expect(vm.$el.classList.contains('col-pc-span-10')).to.equal(true)
        expect(vm.$el.classList.contains('col-pc-offset-2')).to.equal(true)
        expect(vm.$el.classList.contains('col-pc-order-3')).to.equal(true)
        oDiv.remove()
        vm.$destroy()
    })
})


