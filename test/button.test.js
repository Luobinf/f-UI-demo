const spies = require('chai-spies')
chai.use(spies)

const expect = chai.expect; //引入断言库

import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

//下面it和花括号一样用来隔离作用域的，每一个it都是一个测试用例
//第一个参数是测试描述的名字；第二个参数为所要测试的代码(实际执行的函数)，写在了一个函数中。

//Mocha是一个单元测试框架库
describe('Button', () => {
    //BDD 行为测试驱动 TDD测试驱动开发
    //这里描述了Button的一系列行为
    it('Button存在 ', () => {
        expect(Button).to.be.ok
    })

    it('可以接收icon',() => {
        let Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
        vm.$destroy()
    })

    it('可以接受loading',() => {
        let Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
                loading: true
            }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-loading')
        vm.$destroy()
    })

    it('svg默认的order为1',() => {
        const div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
                icon: 'settings'
            }
        }).$mount(div)
        let svg = vm.$el.querySelector('svg')
        let order = window.getComputedStyle(svg).order
        expect(order).to.equal('1')
        vm.$el.remove()
        vm.$destroy()
    })

    it('设置icon-position为right时order为2',() => {
        const div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
                icon: 'settings',
                iconPosition: 'right'
            }
        }).$mount(div)
        let svg = vm.$el.querySelector('svg')
        let order = window.getComputedStyle(svg).order
        expect(order).to.equal('2')
        vm.$el.remove()
        vm.$destroy()
    })

    it('button默认size为medium',() => {
        const div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
            },
            mounted() {
                expect(this.$el.classList.contains('medium')).to.equal(true)
            }
        }).$mount(div)
        vm.$el.remove()
        vm.$destroy()
    })

    it('button可以接受size,将size大小设置为small',() => {
        const div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
                size: 'small'
            },
            mounted() {
                expect(this.$el.classList.contains('small')).to.equal(true)
            }
        }).$mount(div)
        vm.$el.remove()
        vm.$destroy()
    })

    it('type默认值为default',() => {
        const div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
            },
            mounted() {
                expect(this.$el.classList.contains('default')).to.equal(true)
            }
        }).$mount(div)
        vm.$el.remove()
        vm.$destroy()
    })

    it('button可以接受type，设置为dashed',() => {
        const div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Button)
        let vm = new Constructor({
            propsData: {
                type: 'dashed'
            },
            mounted() {
                expect(this.$el.classList.contains('dashed')).to.equal(true)
            }
        }).$mount(div)
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
        const callback = sinon.spy(); //监视函数
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.been.called
    })
})
