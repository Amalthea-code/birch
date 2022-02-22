export default {
  namespaced: true,
  state: {
    shifts: [
      {
        number: 1,
        date: '2&nbsp;июня — 14&nbsp;июня',
        price: 29900,
        service_name: '1 смена 2 июня — 14 июня'
      },
      {
        number: 2,
        date: '17&nbsp;июня — 29&nbsp;июня',
        price: 29900,
        service_name: '2 смена 17 июня — 29 июня'
      },
      {
        number: 3,
        date: '2&nbsp;июля — 14&nbsp;июля',
        price: 29900,
        service_name: '3 смена 2 июля — 14 июля'
      },
      {
        number: 4,
        date: '17&nbsp;июля — 29&nbsp;июля',
        price: 29900,
        service_name: '4 смена 17 июля — 29 июля'
      },
      {
        number: 5,
        date: '1&nbsp;августа — 13&nbsp;августа',
        price: 29900,
        service_name: '5 смена 1 августа — 13 августа'
      },
      {
        number: 6,
        date: '16&nbsp;августа — 28&nbsp;августа',
        price: 29900,
        service_name: '6 смена 16 августа — 28 августа'
      },
    ]
  },
  mutations: {
    SET_SHIFTS(state, payload) {
      state.shifts = payload;
    }
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
        console.log(data);
        commit('SET_SHIFTS', data)
      });
    },
  },
  getters: {
    GET_SHIFTS: (state) => {
      return state.shifts;
    }
  }
};