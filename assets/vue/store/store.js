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
    },

    SET_CONTACTS(state, payload) {
      state.cvData.contacts = payload
    },

    SET_EXPERIENCES(state, payload) {
      state.cvData.experiences = payload
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
      
      commit("SET_AUTHENTIFICATED", true)
      commit("SET_USERTOKEN", res.data.token)
      localStorage.setItem("userToken", res.data.token)

      axios.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${res.data.token}`

        return config
      })

      router.push("/admin")
    },

    SET_AUTHENTIFICATED({ commit }, authState) {
      commit("SET_AUTHENTIFICATED", authState)
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

      if (cvData && cvData != undefined) commit("SET_CV_DATA", JSON.parse(cvData))

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

    async FETCH_USERCOUNT({ commit }) {
      return await axios
        .get("/api/user/count")
        .then((res) => {
          commit('SET_USERCOUNT', res.data)

          return res.data
        })
        .catch((error) => console.error(error))
    },

    UPDATE_DATA({ getters }) {
      localStorage.removeItem("cvData")
      localStorage.setItem("cvData", JSON.stringify(getters.cvData))
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

    async ADD_CONTACT({ commit, dispatch }, formData) {
      return await axios
        .post("/api/contact/add", {
          name: formData.name,
          link: formData.link,
          icon: formData.icon,
          order: formData.order
        })
        .then((res) => {
          commit("SET_CONTACTS", res.data)
          dispatch("UPDATE_DATA")

          return res
        })
        .catch((error) => console.error(error))
    },

    async ADD_EXPERIENCE({ commit, dispatch }, formData) {
      return await axios
        .post("/api/experience/add", {
          title: formData.title,
          company: formData.company,
          link: formData.link,
          location: formData.location,
          description: formData.description,
          date_start: formData.date_start,
          date_end: formData.date_end,
          order: formData.order,
        })
        .then((res) => {
          commit("SET_EXPERIENCES", res.data);
          dispatch("UPDATE_DATA");

          return res;
        })
        .catch((error) => console.error(error));
    },

    async EDIT_CONTACT({ commit, dispatch }, formData) {
      return await axios
        .post("/api/contact/edit", {
          id: formData.id,
          name: formData.name,
          link: formData.link,
          icon: formData.icon,
          order: formData.order
        })
        .then((res) => {
          commit("SET_CONTACTS", res.data)
          dispatch("UPDATE_DATA")

          return res
        })
        .catch((error) => console.error(error))
    },

    async DELETE_CONTACT({ commit, dispatch }, id) {
      return await axios
        .post("/api/contact/delete", { id: id })
        .then((res) => {
          commit("SET_CONTACTS", res.data)
          dispatch("UPDATE_DATA")

          return res
        })
        .catch((error) => console.error(error))
    },
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
