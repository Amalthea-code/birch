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
        component: () => import('../views/index.vue'),
        meta: {
          title: ''
        }
      },
      {
        path: '/kids',
        name: 'kids',
        component: () => import('../views/kids.vue'),
        meta: {
          title: ' - Детям'
        }
        
      },
      {
        path: '/orders-confirmation',
        name: 'orders-confirmation',
        component: () => import('../views/ordersSuccess.vue'),
        meta: {
          title: 'orders-success'
        }
        
      },
      {
        path: '/parents',
        name: 'parents',
        component: () => import('../views/parents.vue'),
        meta: {
          title: ' - Родителям'
        }
      },
      {
        path: '/relaxation',
        name: 'relaxation',
        component: () => import('../views/relaxation.vue'),
        meta: {
          title: ' - Семейный отдых'
        }
      },
      {
        path: '/media-center',
        name: 'media-center',
        component: () => import('../views/media.vue'),
        meta: {
          title: ' - Медиацентр'
        }
      },
      {
        path: '/history',
        name: 'history',
        component: () => import('../views/history.vue'),
        meta: {
          title: ' - О лагере'
        }
      },
      {
        path: '/gallery',
        name: 'gallery',
        component: () => import('../views/gallery.vue'),
        meta: {
          title: ' - Фотогалерея'
        }
      },
      {
        path: '/contacts',
        name: 'contacts',
        component: () => import('../views/contacts.vue'),
        meta: {
          title: ' - Контакты'
        }
      },
      {
        path: '/vacancies',
        name: 'vacancies',
        component: () => import('../views/vacancies.vue'),
        meta: {
          title: ' - Вакансии'
        }
      },
      {
        path: '/registration',
        name: 'registrationPerson',
        component: () => import('../views/registrationPerson.vue'),
        meta: {
          title: ' - Регистрация'
        }
      },
      {
        path: '/registrationParent',
        name: 'registration-parent',
        component: () => import('../views/registrationParent.vue'),
        meta: { 
          requiresAuth: true,
          title: ' - Регистрация'
        }
      },
      {
        path: '/registrationChild',
        name: 'registration-child',
        component: () => import('../views/registrationChild.vue'),
        meta: { 
          requiresAuth: true,
          title: ' - Регистрация'
        }
      },
      {
        path: '/cabinet',
        name: 'cabinet',
        props: true,
        component: () => import('../views/cabinet.vue'),
        meta: { 
          requiresAuth: true,
          title: ' - Личный кабинет'
        }
      },
      {
        path: '/payment',
        name: 'payment',
        component: () => import('../views/payment.vue'),
        meta: {
          requiresAuth: true,
          title: ' - Оплата'
        }
      },
      {
        path: '/news',
        name: 'news',
        component: () => import('../views/news.vue'),
        meta: {
          title: ' - Новости'
        }
      },
      {
        path: '/news/:id',
        name: 'news-page',
        component: () => import('../views/newspage.vue'),
        meta: {
          title: ' - Новость'
        }
      },
      {
        path: '/detalTrip/:id',
        name: 'detal-trip',
        component: () => import('../views/detalTrip.vue'),
        meta: { 
          requiresAuth: true,
          title: ' - Новость'
        }
      },
      { 
        path: '/404', 
        name: '404', 
        component: () => import('../views/404.vue'),
        meta: { 
          requiresAuth: true,
          title: ' - 404'
        }
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
        component: () => import('../views/authorization.vue'),
        meta: {
          title: ' - Авторизация'
        }
      },
      {
        path: '/confidence',
        name: 'confidence',
        component: () => import('../views/confidence.vue'),
        meta: {
          title: ' - О детском телефоне доверия'
        }
      },
      {
        path: '/answer',
        name: 'answer',
        props: true,
        component: () => import('../views/answerPage.vue'),
        meta: {
          title: ' - Ответ'
        }
      },
      {
        path: '/promotion',
        name: 'promotion',
        component: () => import('../views/promotion.vue'),
        meta: {
          title: ' - Кешбэк'
        }
      },
      {
        path: '/recovery',
        name: 'recovery',
        component: () => import('../views/recovery.vue'),
        meta: {
          title: ' - Восстановление'
        }
      },
      {
        path: '/recoveryPassword',
        name: 'recoveryPassword',
        component: () => import('../views/recoveryPassword.vue'),
        meta: {
          title: ' - Восстановление пароля'
        }
      },
      {
        path: '/parent/:id',
        name: 'detal-card-parent',
        props: true,
        component: () => import('../views/detalCard.vue'),
        meta: { 
          requiresAuth: true,
          title: ' - Родитель/Опекун'
        }
      },
      {
        path: '/child/:id',
        name: 'detal-card-child',
        props: true,
        component: () => import('../views/detalCard.vue'),
        meta: { 
          requiresAuth: true,
          title: ' - Ребенок'
        }
      },
    ]
  }
]

const DEFAULT_TITLE = 'Лагерь "Березка"';
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      if (to.hash === '#created') {
        return { top: 0 }
      }
      return {
        top: 60,
        el: to.hash,
        behavior: 'smooth',
      }
    }
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
      next()
      return
    }
    next('/autorization') 
  } else {
    next() 
  }
})
router.afterEach((to) => {
  document.title = DEFAULT_TITLE +  to.meta.title || DEFAULT_TITLE;
});
export default router
