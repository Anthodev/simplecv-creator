import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  Vuelidate,
  render: h => h(App),
  components: { App },
  template: "<App/>"
}).$mount('#app')
