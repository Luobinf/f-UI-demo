import { mount } from '@vue/test-utils'
import Popover from '../../src/popover.vue'
import sinonChai from 'sinon-chai'
import sinon from 'sinon'
import chai,{expect} from 'chai'
chai.use(sinonChai)

describe('测试Popover组件',() => {
  it('存在', () => {
    expect(Popover).to.be.exist
  })

  it('可以设置position',() => {
    const wrapper = mount(Popover,{
      propsData: {
        position: 'bottom'
      }
    })
    wrapper.find('.trigger').trigger('click')
    expect(wrapper.find('.content-wrapper').classes()).to.includes('position-bottom')
    let contentWrapper = wrapper.find('.content-wrapper')
    expect(contentWrapper.classes('position-bottom')).to.be.true

  })

  it('可以接收visible属性',() => {
    const wrapper = mount(Popover,{
      propsData: {
        visible: true
      }
    })
    let contentWrapper = wrapper.find('.content-wrapper')
    expect(contentWrapper).to.be.exist
  })

  xit('可以接收title属性',() => {
    const wrapper = mount(Popover,{
      propsData: {
        title: '标题'
      }
    })
    let title = wrapper.find('.title')
    expect(title.textContent).to.equal('标题')
  })

  xit('可以接收content属性',() => {
    const wrapper = mount(Popover,{
      propsData: {
        content: '内容'
      }
    })
    let content = wrapper.find('.content')
    expect(content.textContent).to.equal('内容')
  })

  xit('可以接收width属性',() => {
    const wrapper = mount(Popover,{
      propsData: {
        width: '150'
      }
    })
    let contentWrapper = wrapper.find('.content-wrapper')
    let width = window.getComputedStyle(contentWrapper).width
    expect(width).to.equal('150px')
  })
})


