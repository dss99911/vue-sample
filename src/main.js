import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash';//debounce
import axios from 'axios';//api call

//import javascript library
Object.defineProperty(Vue.prototype, '$_', { value: _ });
Object.defineProperty(Vue.prototype, '$axios', { value: axios });

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')


