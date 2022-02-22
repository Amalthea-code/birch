export default {
  namespaced: true,
  state: {
    news: null,
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
      state.foundNews = payload;
    },
  },
  actions: {
    searchNews ({ commit, getters }, id) {
      commit('SET_FOUNDNEWS', getters.GET_NEWS.find( item => item.id == id))
    },
    fetchNews ({commit}, page = 1) {
      fetch('http://89.108.98.57:1337/api/articles?populate=*&pagination[page]=' + page, {
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
