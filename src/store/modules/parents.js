export default {
  namespaced: true,
  state: {
    parents: [],
    foundParent: null,
    parent: null
  },
  mutations: {
    SET_PARENTS(state, payload) {
      state.parents = payload;
    },
    SET_FOUNDPARENT(state, payload) {
      state.foundParent = payload;
    },
    SET_PARENT(state, payload) {
      state.parent = payload;
    },
  },
  actions: {
    searchParent ({ commit, getters }, id) {
      commit('SET_FOUNDPARENT', getters.GET_PARENTS.find((item, index) => index == id)) 
    },
    fetchParents ({ commit, rootGetters }) {
      fetch('http://89.108.98.57:1337/api/parents?filters[user]=' + rootGetters['profile/GET_AUTORIZEDUSER'].id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        commit('SET_PARENTS', data.data)
      })
    },
    fetchCreateParent ({ commit, getters, rootGetters}) {
      fetch('http://89.108.98.57:1337/api/parents', {
        method: 'POST',
        body: JSON.stringify({
          data: {
            sName: getters.GET_PARENT.sName,
            fName: getters.GET_PARENT.username,
            tName: getters.GET_PARENT.tName,
            phone: getters.GET_PARENT.phone,
            email: getters.GET_PARENT.email,
            street: getters.GET_PARENT.street,
            home: getters.GET_PARENT.home,
            apartment: getters.GET_PARENT.apartment,
            city: getters.GET_PARENT.city,
            series: getters.GET_PARENT.series,
            datepassport: getters.GET_PARENT.datePassport,
            issued: getters.GET_PARENT.issued,
            isparent: getters.GET_PARENT.isParent,
            users_permissions_user: String(rootGetters['profile/GET_AUTORIZEDUSER'].id)
          }
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        commit('SET_PARENT', data.data)
      })
    },
    deleteParent ({rootGetters}, id) {
      fetch('http://89.108.98.57:1337/api/parents/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
      })
    }
  },
  getters: {
    GET_PARENTS: (state) => {
      return state.parents;
    },
    GET_FOUNDPARENT: (state) => {
      return state.foundParent;
    },
    GET_PARENT: (state) => {
      return state.parent;
    },
  }
};