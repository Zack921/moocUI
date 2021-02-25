import Demo from './src/main.vue'

// eslint-disable-next-line func-names
Demo.install = function(Vue) {
  Vue.component(Demo.name, Demo)
}

export default Demo