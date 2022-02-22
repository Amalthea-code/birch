import store from '@/store/index.js'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'default',
    redirect: {
      name: 'home'
    },
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/index.vue')
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
        path: '/gallery',
        name: 'gallery',
        component: () => import('../views/gallery.vue')
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
        path: '/registration',
        name: 'registrationPerson',
        component: () => import('../views/registrationPerson.vue'),
      },
      {
        path: '/registrationParent',
        name: 'registration-parent',
        component: () => import('../views/registrationParent.vue'),
        meta: { 
          requiresAuth: true
        }
      },
      {
        path: '/registrationChild',
        name: 'registration-child',
        component: () => import('../views/registrationChild.vue'),
        meta: { 
          requiresAuth: true
        }
      },
      {
        path: '/cabinet',
        name: 'cabinet',
        component: () => import('../views/cabinet.vue'),
        meta: { 
          requiresAuth: true
        }
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import('../views/payment.vue'),
        meta: { 
          requiresAuth: true
        }
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
        path: '/detalTrip/:id',
        name: 'detal-trip',
        component: () => import('../views/detalTrip.vue'),
        meta: { 
          requiresAuth: true
        }
      },
      { 
        path: '/404', 
        name: '404', 
        component: () => import('../views/404.vue')
      },
      { 
        path: '/:pathMatch(.*)*',
        redirect: '/404',
      }
    ]
  },
  {
    path: '/',
    name: 'modal',
    redirect: {
      name: 'authorization'
    },
    component: () => import('../layouts/modal.vue'),
    children: [
      {
        path: '/autorization',
        name: 'authorization',
        component: () => import('../views/authorization.vue')
      },
      {
        path: '/confidence',
        name: 'confidence',
        component: () => import('../views/confidence.vue')
      },
      {
        path: '/answer',
        name: 'answer',
        props: true,
        component: () => import('../views/answerPage.vue')
      },
      {
        path: '/promotion',
        name: 'promotion',
        component: () => import('../views/promotion.vue')
      },
      {
        path: '/recovery',
        name: 'recovery',
        component: () => import('../views/recovery.vue')
      },
      {
        path: '/parent/:id',
        name: 'detal-card-parent',
        props: true,
        component: () => import('../views/detalCard.vue'),
        meta: { 
          requiresAuth: true
        }
      },
      {
        path: '/child/:id',
        name: 'detal-card-child',
        props: true,
        component: () => import('../views/detalCard.vue'),
        meta: { 
          requiresAuth: true
        }
      },
    ]
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
// Отвечает за проверку наличия токена перед тем как пустить на страницы
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') && !store.getters['profile/GET_TOKEN']) {
      store.commit('profile/SET_TOKEN', localStorage.getItem('token'))  
      store.dispatch('profile/fetchUserData')
    }
    if (store.getters['profile/GET_TOKEN']) {
      console.log('qwer')
      next()
      return
    }
    next('/autorization') 
  } else {
    next() 
  }
})
export default router
