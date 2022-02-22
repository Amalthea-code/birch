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
      fetch('http://89.108.98.57:1337/api/childrens?filters[user]=' + rootGetters['profile/GET_AUTORIZEDUSER'].id, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        commit('SET_CHILDREN', data.data)
      })
    },
    fetchCreateChild ({ getters, rootGetters}) {
      fetch('http://89.108.98.57:1337/api/childrens', {
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
      })
    },
    deleteChild ({rootGetters}, id) {
      fetch('http://89.108.98.57:1337/api/childrens/' + id, {
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