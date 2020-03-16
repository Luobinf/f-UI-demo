//app.js是整个是整个应用程序的入口
import Vue from 'vue'
import Button from './Button/button'
import Icon from './icon'
import ButtonGroup from './Button/button-group'
import Input from './input'
import Ginput from './in'
import fRow from './Layout/row'
import fCol from './Layout/col'
import fLayout from './layout'
import fHeader from './Layout/header'
import fContent from './Layout/content'
import fSide from './side'
import fFooter from './Layout/footer'
import fToast from './toast'
import Plugin from './plugin'
import Tabs from './Tabs/tabs'
import TabsHeader from './Tabs/tabs-header'
import TabsBody from './Tabs/tabs-body'
import TabsItem from './Tabs/tabs-item'
import TabsPane from './Tabs/tabs-pane'
import Popover from './popover'
import Collapse from './Collapse/collapse'
import CollapseItem from './Collapse/collapse-item'

Vue.component(`f-button`,Button)
Vue.component(`f-icon`,Icon)
Vue.component(`f-button-group`,ButtonGroup)
Vue.component(`f-input`,Input)
Vue.component(`g-input`,Ginput)
Vue.component(`f-row`,fRow)
Vue.component(`f-col`,fCol)
Vue.component(`f-layout`,fLayout)
Vue.component(`f-header`,fHeader)
Vue.component(`f-content`,fContent)
Vue.component(`f-side`,fSide)
Vue.component(`f-footer`,fFooter)
Vue.component(`f-toast`,fToast)
Vue.component(`f-tabs`,Tabs)
Vue.component(`f-tabs-head`,TabsHeader)
Vue.component(`f-tabs-body`,TabsBody)
Vue.component(`f-tabs-item`,TabsItem)
Vue.component(`f-collapse`,TabsPane)
Vue.component(`f-popover`,Popover)
Vue.component(`f-collapse`,Collapse)
Vue.component(`f-collapse-item`,CollapseItem)


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
        visible: false
    },
    methods: {
        showToast(position){
            this.$toast(`我被关闭啊`,{
                closeButton: {
                    text: `关闭`,
                    callback(toast){
                        toast.hi()
                        console.log(`我被关闭了`)
                    }
                },
                position
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
        }
    }
})

