const expect = chai.expect;
import Vue from 'vue'
import In from '../src/in'


Vue.config.productionTip = false
Vue.config.devtools = false

describe('In',() => {
    it('存在', function () {
        expect(In).to.exist
    })
    it('传入了value',() => {
        const Constructor = Vue.extend(In)
        let vm = new Constructor({
            propsData: {
                value: 'hello world'
            }
        }).$mount()
        let inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('hello world')
    })

    it('传入了error之后icon存在',() => {
        let Constructor = Vue.extend(In)
        let vm = new Constructor({
            propsData: {
                error: '密码错了'
            }
        }).$mount()
        let useElement = vm.$el.querySelector('use')
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
    })
    it('传入了error之后span存在', function () {
        let Constructor = Vue.extend(In)
        let vm = new Constructor({
            propsData: {
                error: '密码错了'
            }
        }).$mount()
        let spanElement = vm.$el.querySelector('.errorInformation')
        expect(spanElement.innerText).to.equal(`密码错了`)
    })
    it('验证disabled',() => {
        let Constructor = Vue.extend(In)
        let vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
       let inputElement = vm.$el.querySelector('input')
       expect(inputElement.disabled).to.equal(true)
    })
    it('验证readonly',() => {
        let Constructor = Vue.extend(In)
        let vm = new Constructor({
            propsData: {
                readonly: true
            }
        }).$mount()
        let inputElement = vm.$el.querySelector('input')
        expect(inputElement.readOnly).to.equal(true)
    })
    it('验证change事件', function () {
        let Constructor = Vue.extend(In)
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
        let Constructor = Vue.extend(In)
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
        let Constructor = Vue.extend(In)
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
        let Constructor = Vue.extend(In)
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
