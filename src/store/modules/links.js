export default {
  namespaced: true,
  state: {
    links_footer: {},
    links_fotohronic: {},
  },
  mutations: {
    SET_LINKS_FOOTER(state, payload) {
      state.links_footer = payload;
    },
    SET_LINKS_FOTOHTONIC(state, payload) {
      state.links_fotohronic = payload;
    },
  },
  actions: {
    fetchLinks({ commit }) {
      fetch(
        process.env.VUE_APP_DOMAIN + "/link-footers",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          commit("SET_LINKS_FOOTER", data.data[0].attributes.links_footer);
          commit("SET_LINKS_FOTOHTONIC", data.data[0].attributes.links_fotohronic);
        });
    },
  },
  getters: {
    GET_LINKS_FOOTER: (state) => {
      return state.links_footer;
    },
    GET_LINKS_FOTOHTONIC: (state) => {
      return state.links_fotohronic;
    },
  }
}