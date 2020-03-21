import Popover from '../src/popover'
import Vue from 'vue'
const expect = chai.expect


describe('Popover',() => {
    it('存在', () => {
        expect(Popover).to.be.exist
    })
    it('接收position属性', function () {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        Vue.component('f-popover',Popover)
        oDiv.innerHTML = `
            <f-popover position="top" ref="aaa">
            <template slot="content">
                <div>popover内v看看</div>
            </template>
            <button>点我</button>
            </f-popover>
        `
        let vm = new Vue({
            el: oDiv
        })
        let contentWrapper = vm.$refs.aaa.$refs.contentWrapper

        expect(contentWrapper.classList.contains(`position-top`)).to.be.true
    })
})



