import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"
import Signin from "../views/Signin"
import Admin from "../views/Admin"

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "", name: 'Home', component: Home },
    { path: "/signin", name: 'Signin', component: Signin },
    { path: "/admin", name: 'Admin', component: Admin },
    // { path: "/signup", component: Home },
    { path: "*", redirect: "" },
  ],
})
