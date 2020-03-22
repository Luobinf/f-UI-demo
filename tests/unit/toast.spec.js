import Toast from '../../src/toast.vue'
import { mount } from '@vue/test-utils'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import chai,{expect} from 'chai'
import Vue from "vue"
chai.use(sinonChai)

describe('Toast',() => {

  it('存在', () => {
    expect(Toast).to.be.exist
  })

  it('接收autoClose属性', function (done) {
    const wrapper = mount(Toast,{
      propsData: {
        autoClose: true,
        autoCloseDelay: 1
      }
    })
    setTimeout(() => {
      expect(document.body.contains(wrapper.vm.$el)).to.eq(false)
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
          callback:callback
        }
      }
    }).$mount(div)
    let closeButton = vm.$el.querySelector('.close')
    expect(closeButton.textContent.trim()).to.equal(`关闭`)
    closeButton.click()
    expect(callback).to.have.been.called
    vm.$el.remove()
    vm.$destroy()
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
    vm.$el.remove()
    vm.$destroy()
  })
  it('接收 position ', function () {
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
    vm.$el.remove()
    vm.$destroy()
  })
})



