import Axios from "axios"

export default function auth({ store, redirect }) {
    console.log('middleware')
    
    if (!store.getters.authenticated) {
        return redirect('/auth')
    }
}
