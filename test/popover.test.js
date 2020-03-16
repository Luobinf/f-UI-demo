import Popover from '../src/popover'
import Vue from 'vue'

const expect = chai.expect


describe('测试Popover组件',() => {
    it('存在', () => {
        expect(Popover).to.be.exist
    })

    it('可以接收position',() => {
        let div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Popover)
        let vm = new Constructor({
            propsData: {
                position: 'bottom'
            }
        }).$mount(div)
        let contentWrapper = vm.$el.querySelector('.content-wrapper')
        expect(contentWrapper.classList.contains('position-bottom')).to.be.true
        vm.$el.remove()
        vm.$destroy()
    })

    it('可以接收visible属性',() => {
        let div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Popover)
        let vm = new Constructor({
            propsData: {
                visible: true
            }
        }).$mount(div)
        let contentWrapper = vm.$el.querySelector('.content-wrapper')
        expect(contentWrapper).to.be.exist
        vm.$el.remove()
        vm.$destroy()
    })

    it('可以接收title属性',() => {
        let div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Popover)
        let vm = new Constructor({
            propsData: {
                title: '标题'
            }
        }).$mount(div)
        let title = vm.$el.querySelector('.title')
        expect(title.textContent).to.equal('标题')
        vm.$el.remove()
        vm.$destroy()
    })

    it('可以接收content属性',() => {
        let div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Popover)
        let vm = new Constructor({
            propsData: {
                content: '内容'
            }
        }).$mount(div)
        let content = vm.$el.querySelector('.content')
        expect(content.textContent).to.equal('内容')
        vm.$el.remove()
        vm.$destroy()
    })

    it('可以接收width属性',() => {
        let div = document.createElement('div')
        document.body.append(div)
        let Constructor = Vue.extend(Popover)
        let vm = new Constructor({
            propsData: {
                width: '150'
            }
        }).$mount(div)
        let contentWrapper = vm.$el.querySelector('.content-wrapper')
        let width = window.getComputedStyle(contentWrapper).width
        expect(width).to.equal('150px')
        vm.$el.remove()
        vm.$destroy()
    })

    // it('事件trigger方式可以是hover',(done) => {
    //     let div = document.createElement('div')
    //     document.body.append(div)
    //     let Constructor = Vue.extend(Popover)
    //     let vm = new Constructor({
    //         propsData: {
    //             title: '标题',
    //             content: '内容',
    //             trigger: 'hover'
    //         }
    //     }).$mount(div)
    //     vm.$el.remove()
    //     vm.$destroy()
    //     暂时跳过
    //     let spy = sinon.spy()
    //     vm.$on('mouseenter',spy)
    //     vm.$el.dispatchEvent(new MouseEvent('mouseenter'))
    //     expect(spy).to.have.been.called
    // })

    it('接收position属性', function () {
        let oDiv = document.createElement('div')
        document.body.append(oDiv)
        Vue.component('f-popover',Popover)
        oDiv.innerHTML = `
            <f-popover position="top" ref="aaa">
            <template slot="content">
                <div>popover内v看看</div>
            </template>
            <button>点我</button>
            </f-popover>
        `
        let vm = new Vue({
            el: oDiv
        })
        let contentWrapper = vm.$refs.aaa.$refs.contentWrapper
        expect(contentWrapper.classList.contains(`position-top`)).to.be.true
        vm.$el.remove()
        vm.$destroy()
    })
})



