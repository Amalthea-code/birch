export default {
  namespaced: true,
  state: {
    vacancies: []
  },
  mutations: {
    SET_VACANCIES(state, payload) {
      state.vacancies = payload;
    },

  },
  actions: {
    fetchShifts ({ commit }) {
      fetch(process.env.VUE_APP_DOMAIN, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        commit('SET_VACANCIES', data)
      });
    },
  },
  getters: {
    GET_VACANCIES: (state) => {
      return state.vacancies;
    }
  }
};