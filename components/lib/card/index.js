import Card from './src/main.vue'

// eslint-disable-next-line func-names
Card.install = function(Vue) {
  Vue.component(Card.name, Card)
}

export default Card