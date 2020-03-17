//app.js是整个是整个应用程序的入口
import Vue from 'vue'
import Button from './Button/button'
import Icon from './icon'
import ButtonGroup from './Button/button-group'
import Input from './input'
import fRow from './grid/row'
import fCol from './grid/col'

import fLayout from './Layout/layout'
import fHeader from './Layout/header'
import fContent from './Layout/main'
import fSider from './Layout/sider'

import fFooter from './Layout/footer'
import fToast from './toast'
import Plugin from './plugin'
import Popover from './popover'
import Collapse from './Collapse/collapse'
import CollapseItem from './Collapse/collapse-item'
import TabPane from "./Tabs/TabPane"
import Tabs from "./Tabs/Tabs"

Vue.component(`f-button`,Button)
Vue.component(`f-icon`,Icon)
Vue.component(`f-button-group`,ButtonGroup)
Vue.component(`f-input`,Input)
Vue.component(`f-row`,fRow)
Vue.component(`f-col`,fCol)
Vue.component(`f-layout`,fLayout)
Vue.component(`f-header`,fHeader)
Vue.component(`f-content`,fContent)
Vue.component(`f-sider`,fSider)
Vue.component(`f-footer`,fFooter)
Vue.component(`f-toast`,fToast)
Vue.component(`f-popover`,Popover)
Vue.component(`f-collapse`,Collapse)
Vue.component(`f-collapse-item`,CollapseItem)

Vue.component(`f-tabs`,Tabs)
Vue.component(`f-tab-pane`,TabPane)

Vue.use(Plugin)

new Vue({
    el: `#app`,
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'well done',
        value: '你好',
        selectedTab: 'sports',
        collapseTab: ['2'],
        visible: false,
        activeName: 'second'
    },
    methods: {
        showToast(position) {
            this.$toast('更新成功😄',{
                closeButton: {
                    // text: '关闭',
                    callback() {
                        console.log('哈哈哈哈你好')
                    }
                },
                enableHtml: false,
                position,
                showButton: true
            })
        },
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        yyy() {
            console.log(`我被点击了`)
        },
        xxxxxx() {
            console.log('我被点击了')
        },
        handleClick(e) {
            console.log(e)
        }
    }
})

