import Vue from "vue"
import VueRouter from "vue-router"
import store from '../store/store'
import Home from "../views/Home"
import Auth from "../views/Auth"
import Admin from "../views/Admin"
// import authMiddleware from "../middleware/auth"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "", name: 'Home', component: Home },
    { path: "/auth", name: 'Auth', component: Auth },
    { path: "/admin", name: 'Admin', component: Admin, meta: { 
      requiresAuth: true
    } },
  ],
})

router.beforeEach( (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('userToken') || localStorage.getItem('userToken') == undefined) {
      next( { name: 'Auth' } )
    } else {
      next()
    }
  } else next()
})

export default router
