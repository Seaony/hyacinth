import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

/**
 * Next, we'll setup some of Hyacinth's Vue components that need to be global
 * so that they are always available. Then, we will be ready to create
 * the actual Vue instance and start up this JavaScript application.
 */
import './plugins'
import './components'
import './styles/app.scss'

/**
 * Close the tip
 */
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
