export default {
  namespaced: true,
  state: {
    children: [],
    foundChild: null,
    child: null
  },
  mutations: {
    SET_CHILDREN(state, payload) {
      state.children = payload;
    },
    SET_FOUNDCHILD(state, payload) {
      state.foundChild = payload;
    },
    SET_CHILD(state, payload) {
      state.child = payload;
    },
  },
  actions: {
    searchChild ({ commit, getters }, id) {
      commit('SET_FOUNDCHILD', getters.GET_CHILDREN.find((item, index) => index == id)) 
    },
    fetchChildren ({ commit, rootGetters }) {
      fetch(process.env.VUE_APP_DOMAIN + '/childrens?filters[user]=' + rootGetters['profile/GET_AUTORIZEDUSER'].id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        commit('SET_CHILDREN', data.data)
      })
    },
    fetchCreateChild ({ getters, rootGetters}) {
      fetch(process.env.VUE_APP_DOMAIN + '/childrens', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            sName: getters.GET_CHILD.sName,
            fName: getters.GET_CHILD.username,
            tName: getters.GET_CHILD.tName,
            totalYear: getters.GET_CHILD.totalYear,
            birth: getters.GET_CHILD.birth,
            street: getters.GET_CHILD.street,
            home: getters.GET_CHILD.home,
            apartment: getters.GET_CHILD.apartment,
            city: getters.GET_CHILD.city,
            series: getters.GET_CHILD.series,
            datepassport: getters.GET_CHILD.datePassport,
            issued: getters.GET_CHILD.issued,
            gender: getters.GET_CHILD.gender,
            birthCertificate: getters.GET_CHILD.birthCertificate,
            users_permissions_user: String(rootGetters['profile/GET_AUTORIZEDUSER'].id),
            alergic: getters.GET_CHILD.alergic,
            hronic: getters.GET_CHILD.hronic,
            psycholog: getters.GET_CHILD.psycholog
          }
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json();
      })
    },
    deleteChild ({rootGetters}, id) {
      fetch(process.env.VUE_APP_DOMAIN + '/childrens/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json();
      })
    },
    rewriteChild ({rootGetters}, {id, year}) {
      fetch(process.env.VUE_APP_DOMAIN + '/childrens/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        },
        body: JSON.stringify({
          data: {
            totalYear: year,
          }
        })
      }).then((response) => {
        return response.json();
      })
    }
  },
  getters: {
    GET_CHILDREN: (state) => {
      return state.children;
    },
    GET_FOUNDCHILD: (state) => {
      return state.foundChild;
    },
    GET_CHILD: (state) => {
      return state.child;
    }
  }
};