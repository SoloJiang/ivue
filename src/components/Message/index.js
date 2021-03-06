import Vue from 'vue'
import Message from './Message.vue'

Message.installMessage = function(options) {
  if (options === undefined || options === null) {
    options = {
      message: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      message: options
    }
  }
  var message = Vue.extend(Message)
  console.log(message)
  var component = new message({
    data: options
  }).$mount()
  document.querySelector('body').appendChild(component.$el)
}

export default {
  install: Vue => {
    Vue.prototype.$message = Message.installMessage
  }
}
