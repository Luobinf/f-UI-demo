import Toast from './toast'
let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message,toastProps) {
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast(Vue,message,toastProps,onClose)
        }
    }
}

function onClose() {
    currentToast = null
}
/*创建toast*/
function createToast(Vue,message,propsData,onClose) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close',onClose)
    document.body.append(toast.$el)
    return toast
}
