import Vue from 'vue'
import Tabs from "../src/Tabs/Tabs.vue"
import TabPane from "../src/Tabs/TabPane"

const expect = chai.expect;


Vue.config.productionTip = false
Vue.config.devtools = false

Vue.component('f-tabs',Tabs)
Vue.component('f-tab-pane',TabPane)

describe('Tabs', () => {

    it('Tabs存在.', () => {
        expect(Tabs).to.exist
    })

    it('验证selected属性', function (done) {
        const div = document.createElement('div')
        document.body.append(div)

        div.innerHTML = `
       <f-tabs :selected.sync="activeName" @tab-click="handleClick">
             <!--   name表示选项卡的别名   -->
             <f-tab-pane label="用户管理配置" name="first">用户管理</f-tab-pane>
             <f-tab-pane label="配置管理" name="second">配置管理</f-tab-pane>
             <f-tab-pane label="角色管理哈哈哈哈" name="third">角色管理</f-tab-pane>
             <f-tab-pane label="定时任务补偿" name="forth" disabled>定时任务补偿</f-tab-pane>
        </f-tabs>
                  `
        let vm = new Vue({
            el: div,
            data() {
                return {
                    activeName: 'first'
                }
            },
            methods: {
                handleClick() {
                }
            }
        })
        setTimeout( () => {
            let select = vm.$el.querySelector('.f-tabs-pane')
            expect(getComputedStyle(select).display).to.equal('block')
            vm.$el.remove()
            vm.$destroy()
            done()
        },0)
    })
})
