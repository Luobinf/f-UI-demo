const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button/button'

Vue.config.productionTip = false
Vue.config.devtools = false

//下面it和花括号一样用来隔离作用域的，每一个it都是一个测试用例，测试哦那管理的名字是
//第一个参数；第二个参数为所要测试的代码，写在了一个函数中。

//Mocha是一个单元测试框架库
describe('Button', () => {
    //BDD 行为测试驱动
    //这里描述了Button的一系列行为
    it('存在.', () => {
        expect(Button).to.be.ok //不是falsy值就可以
    })
    it('可以设置icon.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        vm.$destroy()
    })
    it('可以设置loading.', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                loading: true
            }
        }).$mount()
        const useElements = vm.$el.querySelectorAll('use')
        expect(useElements.length).to.equal(1)
        expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
        vm.$destroy()
    })
    it('icon 默认的 order 是 1', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })
    it('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
    it('点击 button 触发 click 事件', () => {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        }).$mount()

        const callback = sinon.fake(); //相当于是一个spy函数
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called

    })
})
