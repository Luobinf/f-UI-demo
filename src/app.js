//app.js是整个是整个应用程序的入口
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Ginput from './in'
import fRow from './row'
import fCol from './col'
import fLayout from './layout'
import fHeader from './header'
import fContent from './content'
import fSide from './side'
import fFooter from './footer'
import fToast from './toast'
import Plugin from './plugin'

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

Vue.use(Plugin)

new Vue({
    el: `#app`,
    data: {
        loading1: false,
        loading2: true,
        loading3: false,
        message: 'well done',
        value: '你好'
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
        }
    }
})

