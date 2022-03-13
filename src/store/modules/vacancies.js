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
    fetchVacancies ({ commit }) {
      fetch(process.env.VUE_APP_DOMAIN + '/vacancies', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        commit('SET_VACANCIES', data.data)
      });
    },
  },
  getters: {
    GET_VACANCIES: (state) => {
      return state.vacancies;
    }
  }
};