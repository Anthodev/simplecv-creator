import Axios from "axios"

export default function auth({ store, redirect }) {
    console.log('middleware')

    const token = localStorage.getItem('userToken')

    if (token) store.dispatch('SET_AUTHENTIFICATED', true)
    
    if (!store.getters.authenticated) {
        return redirect('/auth')
    }
}
