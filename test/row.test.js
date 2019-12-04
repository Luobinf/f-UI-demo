const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
    //BDD 行为测试驱动
    it('存在.', () => {
        expect(Row).to.exist //不是falsy值就可以
    })

    it('接收gutter属性', (done) => {
        Vue.component('f-row',Row)
        Vue.component('f-col',Col)
        const oDiv = document.createElement('div')
        document.body.append(oDiv)
        oDiv.innerHTML = `
            <f-row gutter="20">
                <f-col span="12"></f-col>
                <f-col span="12"></f-col>
            </f-row>
        `
        const vm = new Vue({
            el: oDiv
        })
        // console.log(vm.$el.innerHTML)
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.equal('-10px')
            expect(getComputedStyle(row).marginRight).to.equal('-10px')
            const colElements = vm.$el.querySelectorAll('.col')
            expect(window.getComputedStyle(colElements[0]).paddingRight).to.equal('10px')
            expect(window.getComputedStyle(colElements[1]).paddingLeft).to.equal('10px')
            done()
        },1500)
        // vm.$destroy()
    })
})
