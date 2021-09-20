import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '../firebase'
const Dashboard = () => import('../_daisy_ui/Dashboard.vue')
const LoginPage = () => import('../_daisy_ui/LoginPage.vue')

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
