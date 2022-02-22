import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vClickOutside from "click-outside-vue3"
import VueTheMask from 'vue-the-mask'

createApp(App).use(store).use(router).use(vClickOutside).use(VueTheMask).mount('#app')
