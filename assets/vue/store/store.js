import Vue from 'vue'
import Vuex from 'vuex'
// import { axios } from '../plugins/axios'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cvData: {
      info: {},
      contacts: {},
      experiences: {},
      trainings: {},
      portfolios_pro: {},
      portfolios_perso: {},
      aptitudes: {},
      skills: {},
      softs: {},
      interests: {},
      languages: {}
    },
    authentificated: false,
    usercount: null,
    userToken: null
  },

  mutations: {
    SET_CV_DATA(state, payload) {
      state.cvData = payload;
    },

    SET_AUTHENTIFICATED(state, payload) {
      state.authentificated = payload
    },

    SET_USERCOUNT(state, payload) {
      state.usercount = payload
    },

    SET_USERTOKEN(state, payload) {
      state.userToken = payload
    },

    SET_USERINFO(state, payload) {
      state.cvData.info = payload
    }
  },

  actions: {
    async SIGNUP({ dispatch }, authData) {
      return await axios
        .post("/api/user/new", {
          username: authData.username,
          password: authData.password,
          roleUser: authData.role,
        })
        .then((res) => {
          console.log(res);
          dispatch("LOGIN", authData);
        })
        .catch((error) => console.log(error));
    },

    async LOGIN({ commit }, authData) {
      const res = await axios.post("/api/auth/login_check", {
        username: authData.username,
        password: authData.password,
      })

      console.info(res)
      
      commit("SET_AUTHENTIFICATED", true)
      commit("SET_USERTOKEN", res.data.token)
      localStorage.setItem("userToken", res.data.token)

      axios.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${res.data.token}`

        return config
      })

      router.push("/admin")
    },

    LOGOUT({
      commit
    }) {
      localStorage.removeItem('userToken')

      commit("SET_AUTHENTIFICATED", false)
      commit("SET_USERTOKEN", null)

      axios.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer `

        return config
      })

      router.push('/auth').catch(error => {
        if (error.name !== 'NavigationDuplicated' && !error.message.includes('Avoided redundant navigation to current location')) console.error(error)
      })
    },

    async FETCH_CV_DATA({ commit }) {
      const cvData = localStorage.getItem("cvData")

      if (cvData) commit("SET_CV_DATA", JSON.parse(cvData))

      return await axios
        .get("/api/data/get")
        .then((res) => {
          commit("SET_CV_DATA", res.data);

          localStorage.removeItem("cvData")
          localStorage.setItem("cvData", JSON.stringify(res.data))

          return res;
        })
        .catch((error) => console.error(error))
    },

    async SET_USERINFO({ commit }, formData) {
      return await axios
        .post("/api/user/set", {
          name: formData.name,
          title: formData.title
        })
        .then((res) => {
          let info = {
            name: res.data.name,
            title: res.data.title
          }

          commit("SET_USERINFO", info)

          return res
        })
        .catch((error) => console.error(error))
    },

    async FETCH_USERCOUNT({ commit }) {
      return await axios
        .get("/api/user/count")
        .then((res) => {
          commit('SET_USERCOUNT', res.data)

          return res.data
        })
        .catch((error) => console.error(error))
    }
  },

  getters: {
    cvData(state) {
      return state.cvData;
    },

    authentificated(state) {
      return state.authentificated;
    },

    usercount(state) {
      return state.usercount;
    },

    userToken(state) {
      return state.userToken
    }
  },
});
