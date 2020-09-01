import Vue from 'vue'
import Vuex from 'vuex'
// import { axios } from '../plugins/axios'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cvData: null,
    authentificated: false,
    usercount: null,
  },

  mutations: {
    SET_CV_DATA(state, payload) {
      state.cvData = payload.cvData;
    },

    SET_AUTHENTIFICATED(state, payload) {
      state.authentificated = payload.authentificated
    },

    SET_USERCOUNT(state, payload) {
      state.usercount = payload
    },
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
      localStorage.setItem("userToken", res.data.token)

      router.push("/admin")
    },

    LOGOUT({
      commit
    }) {
      localStorage.removeItem('userToken')

      commit("SET_AUTHENTIFICATED", false)

      router.push('/')
    },

    async FETCH_CV_DATA({ commit }) {
      return await axios
        .get("/get/data")
        .then((res) => {
          commit("SET_CV_DATA", {
            cvData: res,
          });

          return res;
        })
        .catch((error) => console.error(error))
    },

    async FETCH_USERCOUNT({ commit }) {
      return await axios
        .get("/api/user/count")
        .then((res) => {
          commit('SET_USERCOUNT', res.data)

          return res
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

    userToken() {
      return localStorage.getItem("userToken")
    }
  },
});
