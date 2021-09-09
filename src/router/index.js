import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../_daisy_ui/LoginPage.vue'
import { auth } from '../firebase'
const Dashboard = () => import('../views/Dashboard.vue')

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    beforeEnter() {
      if (auth.currentUser != null) {
        return { name: 'dashboard' }
      }
    }
  },
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth && !auth.currentUser) {
    next({ name: 'login' })
  } else if (to.meta.requireAuth && auth.currentUser) {
    next()
  } else {
    next()
  }
})

export default router
