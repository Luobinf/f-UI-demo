import fToast from "./toast"

let currentToast
export default {
    install(Vue) {
        Vue.prototype.$toast = function(message,toastOptions) {
            if(currentToast) {
                currentToast.close()
            }
            currentToast = createToast(message,toastOptions,Vue,() => {
                //避免在点击关闭按钮后，再次渲染toast组件时，仍然会执行一次close操作
                currentToast = null
            })
        }
    }
}
// 创建toast
function createToast(message,propsData,Vue,onClose) {
    let Toast = Vue.extend(fToast) //构建Toast类
    let toast = new Toast({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()  //此时toast在内存中，不再页面中
    toast.$on('close',onClose)
    document.body.append(toast.$el)
    return toast
}
