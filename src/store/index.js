import { createStore } from 'vuex'

import news from "@/store/modules/news";
import parents from "@/store/modules/parents"
import children from "@/store/modules/children"
import trips from "@/store/modules/trips"
import profile from "@/store/modules/profile"
import vacancies from "@/store/modules/vacancies"
import shifts from "@/store/modules/shifts"
import gallery from "@/store/modules/gallery"

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    news,
    parents,
    children,
    trips,
    profile,
    shifts,
    vacancies,
    gallery
  }
})
