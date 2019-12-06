const expect = chai.expect
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row',() => {
    it('存在',() => {
        expect(Row).to.exist
    })
    it('接收justify属性', function () {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                justify: 'center'
            }
        }).$mount(oDiv)
        expect(getComputedStyle(vm.$el).justifyContent).to.equal('center')
        oDiv.remove()
        vm.$destroy()
    })
    it('接收align属性', function () {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        let Constructor = Vue.extend(Row)
        let vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount(oDiv)
        expect(getComputedStyle(vm.$el).alignItems).to.equal('center')
        oDiv.remove()
        vm.$destroy()
    })
    it('接收gutter属性', function (done) {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        Vue.component('f-row',Row)
        Vue.component('f-col',Col)
        oDiv.innerHTML = `
            <f-row gutter="20">
                <f-col span="10" style="height: 10px;"></f-col>
                <f-col span="14" style="height: 10px;"></f-col>
            </f-row>
        `
        let vm = new Vue({
            el: oDiv
        })
        setTimeout(() => {
            let row = vm.$el.querySelector('.f-row')
            expect(getComputedStyle(row).marginLeft).to.equal(`-10px`)
            expect(getComputedStyle(row).marginRight).to.equal(`-10px`)
            let colS = vm.$el.querySelectorAll('.f-col')
            expect(getComputedStyle(colS[0]).paddingLeft).to.equal('10px')
            expect(getComputedStyle(colS[1]).paddingRight).to.equal('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        },1000)
    })
})
