export default {
  namespaced: true,
  state: {
    shifts: [],
    shiftsPre: []
  },
  mutations: {
    SET_SHIFTS(state, payload) {
      state.shifts = payload;
    },
    SET_SHIFTS_PRE(state, payload) {
      state.shiftsPre = payload;
    },
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
        const obj1 = {
          id: 7,
          attributes : {
            ...data.data[data.data.length - 1].attributes
          }
        }
        obj1.attributes.price = 11000
        delete obj1.attributes.service_name
        
        // delete obj1.attributes.surcharge
        const obj2 = {
          id: 8,
          attributes : {
            ...data.data[data.data.length - 1].attributes
          }
        }
        delete obj2.attributes.service_name
        delete obj2.attributes.prepaid
        obj2.attributes.price = 11000
        const dataPre = [...data.data, obj1, obj2]
        commit('SET_SHIFTS_PRE', dataPre)
      });
    }
  },
  getters: {
    GET_SHIFTS: (state) => {
      return state.shifts;
    },
    GET_SHIFTS_PRE: (state) => {
      console.log(state.shiftsPre);
      return state.shiftsPre
    }
  }
};