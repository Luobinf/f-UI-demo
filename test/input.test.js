const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false


//Mocha是一个单元测试框架库
describe('Input', () => {
    //BDD 行为测试驱动
    it('存在.', () => {
        expect(Input).to.exist //不是falsy值就可以
    })
    describe('验证props',() => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接收value',() => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.equal('1234')
        })

        it('接收disabled',() => {
          vm = new Constructor({
                propsData: {
                    value: '1234',
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.
            $el.querySelector('input')
            expect(inputElement.disabled).to.equal(true)
        })

        it('接收readonly',() => {
            vm = new Constructor({
                propsData: {
                    value: '1234',
                    readonly:true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.readOnly).to.equal(true)
        })
        it('接收error',() => {
            vm = new Constructor({
                propsData: {
                    value: '1',
                    error: `不能少于两个字`
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute("xlink:href")).to.equal('#i-error')
            const errorMessageElement = vm.$el.querySelector('.errorMessage')
            expect(errorMessageElement.innerText).to.equal('不能少于两个字')
        })
    })
    describe('事件',() => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it(`支持change/input/focus/blur事件`,() => {
            ["change","input","focus","blur"].forEach((eventName) => {
                vm = new Constructor().$mount()
                const callback = sinon.fake(); //相当于是一个spy函数
                vm.$on(eventName, callback)
                //触发input的change事件
                let event = new Event(eventName)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })
        })

    })
})
