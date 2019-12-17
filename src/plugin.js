import Toast from './toast'
let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message,toastProps) {
            if(currentToast){
                currentToast.close()
            }
            currentToast = createToast(Vue,message,toastProps)
        }
    }
}


/*创建toast*/
function createToast(Vue,message,propsData) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData
    })
    toast.$slots.default = [message]
    toast.$mount()
    document.body.append(toast.$el)
    return toast
}
