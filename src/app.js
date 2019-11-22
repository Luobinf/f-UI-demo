//app.js是整个是整个应用程序的入口
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

//全局的f-button组件
Vue.component(`f-button`,Button)
Vue.component(`f-icon`,Icon)
Vue.component(`f-button-group`,ButtonGroup)
new Vue({
    el: `#app`,
    data: {
        loading1: false,
        loading2: true,
        loading3: false
    }
})
