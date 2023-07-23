import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Manage from '@/views/Manage.vue'
import useUserStore from '@/stores/user'

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    name: 'manage',
    alias: '/admin',
    path: '/manage',
    component: Manage,
    // beforeEnter: (to, from, next) => {
    //   console.log('Manage Gruard Route!')

    //   next()
    // },
    meta: { requiresAuth: true }
  },
  {
    path: '/dashboard',
    redirect: { name: 'manage' }
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // use for change colour in active page
  linkExactActiveClass: 'text-yellow-500'
})

// Global guard
router.beforeEach((to, from, next) => {
  console.log('Global Guard Route!')

  if (!to.meta.requiresAuth) {
    next()
    return
  }

  const store = useUserStore()
  if (store.userLoggedIn) {
    next()
  } else {
    next({ name: 'home' })
  }
})
export default router
