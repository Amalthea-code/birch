export default {
  namespaced: true,
  state: {
    shifts: []
  },
  mutations: {
    SET_SHIFTS(state, payload) {
      state.shifts = payload;
    }
  },
  actions: {
    async fetchShifts ({ commit }) {
      await fetch(process.env.VUE_APP_DOMAIN + '/vouchers', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        commit('SET_SHIFTS', data.data)
      });
    }
  },
  getters: {
    GET_SHIFTS: (state) => {
      return state.shifts;
    }
  }
};