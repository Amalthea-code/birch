import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/kids',
    name: 'kids',
    component: () => import('../views/kids.vue')
  },
  {
    path: '/parents',
    name: 'parents',
    component: () => import('../views/parents.vue')
  },
  {
    path: '/relaxation',
    name: 'relaxation',
    component: () => import('../views/relaxation.vue')
  },
  {
    path: '/media-center',
    name: 'media-center',
    component: () => import('../views/media.vue')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import('../views/history.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/contacts.vue')
  },
  {
    path: '/vacancies',
    name: 'vacancies',
    component: () => import('../views/vacancies.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/news.vue')
  },
  {
    path: '/news/:id',
    name: 'news-page',
    component: () => import('../views/newspage.vue')
  },
  { 
    path: '/404', 
    name: '404', 
    component: () => import('../views/404.vue')
  }, { 
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
