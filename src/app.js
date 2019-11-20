//app.js是整个是整个应用程序的入口
import Vue from 'vue'
import Button from './button'
//全局的f-button组件
Vue.component(`f-button`,Button)
new Vue({
    el: `#app`,
})
