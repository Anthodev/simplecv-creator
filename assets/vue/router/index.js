import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import Auth from "../views/Auth"
import Admin from "../views/Admin"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "", name: 'Home', component: Home },
    { path: "/signin", name: 'Auth', component: Auth },
    { path: "/admin", name: 'Admin', component: Admin },
    // { path: "/signup", component: Home },
    { path: "*", redirect: "" },
  ],
})
