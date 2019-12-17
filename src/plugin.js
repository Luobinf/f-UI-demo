import Toast from './toast'
export default {
    install(Vue,options){
        Vue.prototype.$toast = function (message,toastProps) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    closeButton: {
                        text: toastProps.closeButton.text,
                        callback: toastProps.closeButton.callback,
                    },
                    position: toastProps.position
                }
            })
            toast.$slots.default = [message]
            toast.$mount()
            document.body.append(toast.$el)
        }
    }
}
