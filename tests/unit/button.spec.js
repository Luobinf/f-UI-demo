import { mount } from '@vue/test-utils'
import Button from '../../src/button/button.vue'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import chai,{expect} from 'chai'
chai.use(sinonChai)

describe('Button', () => {
  //BDD 行为测试驱动 TDD测试驱动开发
  //这里描述了Button的一系列行为
  it('Button存在 ', () => {
    expect(Button).to.be.ok
  })

  it('可以接收icon',() => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'settings'
      }
    })
    expect( wrapper.find('use').attributes('href')).to.equal('#i-settings')
  })

  it('可以接受loading',() => {
    const wrapper = mount(Button,{
      propsData: {
        loading: true
      }
    })
    expect( wrapper.find('use').attributes('href')).to.equal('#i-loading')
  })

  xit('svg默认的order为1',() => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'settings'
      }
    })
    const vm = wrapper.vm

    let svg = vm.$el.querySelector('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.equal('1')
  })

  xit('设置icon-position为right时order为2',() => {
    const wrapper = mount(Button,{
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })
    let svg = wrapper.find('svg')
    let order = window.getComputedStyle(svg).order
    expect(order).to.equal('2')
  })

  it('button默认size为medium',() => {
    const wrapper = mount(Button,{
      propsData: {
      }
    })
    expect(wrapper.vm.$el.classList.contains('medium')).to.equal(true)
  })

  it('button可以接受size,将size大小设置为small',() => {
    const wrapper = mount(Button,{
      propsData: {
        size: 'small'
      }
    })
    expect(wrapper.vm.$el.classList.contains('small')).to.equal(true)
  })

  it('type默认值为default',() => {
    const wrapper = mount(Button,{
      propsData: {
        size: 'small'
      }
    })
    expect(wrapper.vm.$el.classList.contains('default')).to.equal(true)
  })

  it('button可以接受type，设置为dashed',() => {
    const wrapper = mount(Button,{
      propsData: {
        type: 'dashed'
      }
    })
    expect(wrapper.vm.$el.classList.contains('dashed')).to.equal(true)
  })

  it('点击 button 触发 click 事件', () => {
    const wrapper = mount(Button)
    const vm = wrapper.vm
    const button = wrapper.find('button')
    const callback = sinon.spy(); //监视函数
    vm.$on('click', callback)
    button.trigger('click')
    expect(callback).to.have.been.called
  })
})
