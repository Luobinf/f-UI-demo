const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tab/tabs.vue'

import TabsHeader from '../src/tab/tabs-header'
import TabsBody from '../src/tab/tabs-body'
import TabsItem from '../src/tab/tabs-item'
import TabsPane from '../src/tab/tabs-pane'

Vue.component(`f-tabs`,Tabs)
Vue.component(`f-tabs-head`,TabsHeader)
Vue.component(`f-tabs-body`,TabsBody)
Vue.component(`f-tabs-item`,TabsItem)
Vue.component(`f-tabs-pane`,TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Tabs', () => {
    //BDD 行为测试驱动
    //这里描述了Button的一系列行为
    it('存在.', () => {
        expect(Tabs).to.exist
    })

    it('接收selected属性', function (done) {
        const div = document.createElement('div')
        document.body.append(div)
        div.innerHTML = `
               <f-tabs selected="finance">
        <f-tabs-head>
            <f-tabs-item name="woman" >
                 美女
            </f-tabs-item>
            <f-tabs-item name="finance">
                财经
            </f-tabs-item>
            <f-tabs-item name="sports">
                体育
            </f-tabs-item>
        </f-tabs-head>
        <f-tabs-body>
            <f-tabs-pane name="woman">
                美女相关资讯
            </f-tabs-pane>
            <f-tabs-pane name="finance">
                财经相关资讯
            </f-tabs-pane>
            <f-tabs-pane name="sports">
                体育相关资讯
            </f-tabs-pane>
        </f-tabs-body>
    </f-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick( () => {
            let select = vm.$el.querySelector('.tabs-pane')
            expect(select.classList.contains('active')).to.be.exist
            done()
        })
    })
})
