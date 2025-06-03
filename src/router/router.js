// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
// import store from '../store' // Если используешь Vuex/Pinia для проверки авторизации

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutPage.vue')
  },
  {
    path: '/privacy-policy',
    name: 'privacy-policy',
    component: () => import('../views/PrivacyPage.vue')
  },
  {
    path: '/effects',
    name: 'effects',
    component: () => import('../views/EffectsPage.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import('../views/Courses.vue')
  },
  {
    path: '/examples',
    name: 'Examples',
    component: () => import('../views/ExamplesPage.vue')
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/ContactsPage.vue')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/404Page.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/ProfilePage.vue'),
    meta: { requiresAuth: true }, // Защищённый маршрут
    children: [
      {
        path: 'lesson-:courseName/:ind', // courseName — например, "js", "python"
        name: 'Lesson',
        component: () => import('../views/LessonPage.vue'),
        props: true,
        meta: { requiresAuth: true }
      }
    ]
  },
//   {
//     path: '/login',
//     name: 'Login',
//     component: () => import('../views/LoginPage.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL || '/vue-learn/'),
  routes
})

// Проверка авторизации
router.beforeEach((to, from, next) => {
//   const isAuthenticated = store.getters.isAuthenticated // или твоя реализация
  const isAuthenticated = localStorage.getItem('token') !== null
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router