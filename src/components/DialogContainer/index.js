import Vue from 'vue'
import Container from './Container'

Container.installSlot = (function() {
  // 单例判断
  let component, olderSlot
  return function(slot) {
    // 判断传入的是否是一个组件
    if (typeof slot === 'object' && typeof slot.render === 'function') {
      if (!component) {
        const container = Vue.extend(Container)
        component = new container({
          components: {
            'slot-component': slot
          }
        })
        olderSlot = slot
        document.querySelector('body').appendChild(component.$mount().$el)
      } else if (slot !== olderSlot) {
        // 替换 slot
        component.$options.components['slot-component'] = slot
        component.$mount()
      }
    }
  }
})()

export default {
  install(Vue) {
    Vue.prototype.$dialog = Container.installSlot
  }
}
