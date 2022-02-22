export default {
  namespaced: true,
  state: {
    trips: [],
    foundTrips: null
  },
  mutations: {
    SET_TRIPS(state, payload) {
      state.trips = payload;
    },
    SET_FOUNDTRIPS(state, payload) {
      state.foundTrips = payload;
    }
  },
  actions: {
    searchTrips ({ commit, getters }, id) {
      commit('SET_FOUNDTRIPS', getters.GET_TRIPS.find( item => item.id == id))
    },

  },
  getters: {
    GET_TRIPS: (state) => {
      return state.trips;
    },
    GET_FOUNDTRIPS: (state) => {
      return state.foundTrips;
    }
  }
};