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

//单元测试
import chai from 'chai'
const expect = chai.expect
{
    const Constructor = Vue.extend(Button)
    console.log(Constructor)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
        }
    })
    vm.$mount('#test')

    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    console.log(Constructor)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()

}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    console.log(Constructor)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            loading: true
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    console.log(Constructor)
    const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    //mock
    const Constructor = Vue.extend(Button)
    const fButton = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
    })
    fButton.$mount()
    fButton.$on('click',function () {
        expect(1).to.eq(2)
    })
    //你希望上面这个函数被执行
    let button = fButton.$el
    button.click()

}

