import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cvData: null
  },

  mutations: {
    SET_CV_DATA(state, payload) {
      state.cvData = payload.cvData
    }
  },

  actions: {
    async FETCH_CV_DATA({
      commit
    }) {
      return await axios.get(window.location.hostname + '/get/data')
      .then(res => {
        commit('SET_CV_DATA', {
          cvData: res
        })

        return res
      })
      .catch(error => console.error(error))
    }
  },

  getters: {
    cvData(state) {
      return state.cvData
    }
  }
})
