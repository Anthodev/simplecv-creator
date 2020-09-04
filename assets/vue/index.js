import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)

axios.defaults.baseURL = `https://` + window.location.hostname

// const token = store.getters.userToken

// axios.interceptors.request.use(config => {
//   if (token) config.headers.Authorization = `Bearer ${token}`

//   return config
// })

axios.interceptors.response.use(res => {
  return res
}, error => {
  if (error.response.status === 401) {
    store.dispatch('LOGOUT')
  } else return Promise.reject(error)
})

new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  Vuelidate,
  render: h => h(App),
  components: { App },
  template: "<App/>",
}).$mount('#app')
