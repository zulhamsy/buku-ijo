import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import App from './App.vue'

let app
onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.use(store)
    app.mount('#app')
  }
})
