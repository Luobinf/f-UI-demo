import Toast from '../src/toast'
import Vue from 'vue'
const expect = chai.expect


describe('Toast',() => {
    it('存在', () => {
        expect(Toast).to.be.exist
    })

    it('autoClose', function (done) {
        let div = document.createElement('div')
        document.body.append(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                autoClose: true,
                autoCloseDelay: 1
            }
        }).$mount(div)
        setTimeout(() => {
            expect(document.body.contains(vm.$el)).to.eq(false)
            done()
        },1500)
    })
    it('接收closeButton', function () {
        const callback = sinon.fake()
        let div = document.createElement('div')
        document.body.append(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                closeButton: {
                    text: `关闭`,
                    callback
                }
            }
        }).$mount(div)
        let closeButton = vm.$el.querySelector('.close')
        expect(closeButton.textContent.trim()).to.equal(`关闭`)
        closeButton.click()
        expect(callback).to.have.been.called
    })
    it('接收 enableHtml ', function () {
        const callback = sinon.fake()
        let div = document.createElement('div')
        document.body.append(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                enableHtml: true
            }
        })
        vm.$slots.default = ['<strong id="hi">hi</strong>']
        vm.$mount(div)
        let strong = vm.$el.querySelector('#hi')
        expect(strong).to.exist
    })
    it('接收 position ', function () {
        const callback = sinon.fake()
        let div = document.createElement('div')
        document.body.append(div)
        const Constructor = Vue.extend(Toast)
        const vm = new Constructor({
            propsData: {
                position: 'bottom'
            }
        })
        vm.$mount(div)
        expect(vm.$el.classList.contains(`position-bottom`)).to.equal(true)
    })
})


