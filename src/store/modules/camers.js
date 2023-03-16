export default {
  namespaced: true,
  state: {
    camers: []
  },
  mutations: {
    SET_CAMERS(state, payload) {
      state.camers = payload;
    }
  },
  actions: {
    fetchCamers ({commit}) {
      fetch(process.env.VUE_APP_DOMAIN + '/camers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        commit('SET_CAMERS', data.data)
      })
    }
  },
  getters: {
    GET_CAMERS: (state) => {
      return state.camers;
    }
  }
};