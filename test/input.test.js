const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('测试Input.vue组件', () => {
    it('Input存在', () => {
        expect(Input).to.be.ok
    })

    it('可以接受value属性', function () {
        let Constructor = Vue.extend(Input)
        let vm = new Constructor({
            propsData: {
                value: 23
            }
        }).$mount()
        let input = vm.$el.querySelector('input')
        expect(input.value).to.equal('23')
        vm.$el.remove()
        vm.$destroy()
    })

    it('验证disabled属性', function () {
        const div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Input)
        let vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount(div)
        let input = vm.$el.querySelector('input')
        expect(input.disabled).to.equal(true)
        vm.$el.remove()
        vm.$destroy()
    })

    it('验证readonly属性', function () {
        const div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Input)
        let vm = new Constructor({
            propsData: {
                readonly: true
            }
        }).$mount(div)
        let input = vm.$el.querySelector('input')
        expect(input.readOnly).to.equal(true)
        vm.$el.remove()
        vm.$destroy()
    })

    it('传入了error之后icon存在',() => {
        let Constructor = Vue.extend(Input)
        let vm = new Constructor({
            propsData: {
                error: '密码错了'
            }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
    })

    it('传入了error之后span存在', function () {
        let Constructor = Vue.extend(Input)
        let vm = new Constructor({
            propsData: {
                error: '密码错了'
            }
        }).$mount()
        let spanElement = vm.$el.querySelector('.errorMessage')
        expect(spanElement.innerText).to.equal(`密码错了`)
    })

    it('验证change事件', function () {
        let Constructor = Vue.extend(Input)
        let vm = new Constructor({

        }).$mount()
        const callback = sinon.fake(); //相当于是一个spy函数
        vm.$on('change',callback)
        let inputElement = vm.$el.querySelector('input')

        //js主动触发事件
        let evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        inputElement.dispatchEvent(evt);
        expect(callback).to.have.been.called
    })
    it('验证input事件',() => {
        let Constructor = Vue.extend(Input)
        let vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on('input',callback)
        let inputElement = vm.$el.querySelector('input')

        let evt = document.createEvent("HTMLEvents")
        evt.initEvent("input", false, true)
        inputElement.dispatchEvent(evt);
        expect(callback).to.have.been.called
    })
    it('验证focus事件',() => {
        let Constructor = Vue.extend(Input)
        let vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on('focus',callback)
        let inputElement = vm.$el.querySelector('input')

        let evt = document.createEvent("HTMLEvents")
        evt.initEvent("focus", false, true)
        inputElement.dispatchEvent(evt);
        expect(callback).to.have.been.called
    })
    it('验证blur事件',() => {
        let Constructor = Vue.extend(Input)
        let vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on('blur',callback)
        let inputElement = vm.$el.querySelector('input')

        let evt = document.createEvent("HTMLEvents")
        evt.initEvent("blur", false, true)
        inputElement.dispatchEvent(evt);
        expect(callback).to.have.been.called
    })
})
