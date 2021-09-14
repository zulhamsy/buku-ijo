import { createApp } from 'vue'
import router from './router'
import store from './store'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import App from './App.vue'
import './index.css'

let app
onAuthStateChanged(auth, () => {
  if (!app) {
    app = createApp(App)
    app.use(router)
    app.use(store)
    app.mount('#app')
  }
})

// createApp(App).mount('#app')
