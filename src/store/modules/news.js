export default {
  namespaced: true,
  state: {
    news: [],
    foundNews: null
  },
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_ADDNEWS(state, payload) {
      state.news = state.news.concat(payload)
    },
    SET_FOUNDNEWS(state, payload) {
      console.log(payload);
      state.foundNews = payload;
    },
  },
  actions: {
    searchNews ({ commit, getters }, id) {
      commit('SET_FOUNDNEWS', getters.GET_NEWS.find( item => item.id == id))
    },
    fetchNews ({commit}, page = 1) {
      fetch(process.env.VUE_APP_DOMAIN + '/articles?populate=*&pagination[page]=' + page, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        page > 1 ? commit('SET_ADDNEWS', data.data) : commit('SET_NEWS', data.data)
      })
    },
  },
  getters: {
    GET_NEWS: (state) => {
      return state.news;
    },
    GET_FOUNDNEWS: (state) => {
      return state.foundNews;
    },
  }
};
