export default {
  namespaced: true,
  state: {
    profile: null,
    token: null,
    autorisation: null,
    answer: 'expect',
    authorizedUser: null
  },
  mutations: {
    SET_PROFILE(state, payload) {
      state.profile = payload;
    },
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_AUTORISATION(state, payload) {
      state.autorisation = payload;
    },
    SET_ANSWER(state, payload) {
      state.answer = payload;
    },
    SET_AUTORIZEDUSER(state, payload) {
      state.authorizedUser = payload;
    },
  },
  actions: {
    fetchAutorisation ({ commit, getters }) {
      commit('SET_ANSWER', 'expect')
      fetch('http://89.108.98.57:1337/api/auth/local', {
        method: 'POST',
        body: JSON.stringify(getters.GET_AUTORISATION),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        if (data.jwt) {
          localStorage.setItem('token', data.jwt)
          commit('SET_ANSWER', 'succes')
          commit('SET_TOKEN', data.jwt)
          commit('SET_AUTORIZEDUSER', data.user);
        }
      }).catch(commit('SET_ANSWER', 'fail'));
    },
    fetchRegistration ({ commit, getters }) {
      commit('SET_ANSWER', 'expect')
      fetch('http://89.108.98.57:1337/api/auth/local/register', {
        method: 'POST',
        body: JSON.stringify({
          sName: getters.GET_PROFILE.sName,
          username: getters.GET_PROFILE.username,
          tName: getters.GET_PROFILE.tName,
          phone: getters.GET_PROFILE.phone,
          email: getters.GET_PROFILE.email,
          password: getters.GET_PROFILE.password,
          street: getters.GET_PROFILE.street,
          home: getters.GET_PROFILE.home,
          apartment: getters.GET_PROFILE.apartment,
          city: getters.GET_PROFILE.city,
          series: getters.GET_PROFILE.series,
          datePassport: getters.GET_PROFILE.datePassport,
          issued: getters.GET_PROFILE.issued
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        if (data.jwt) {
          commit('SET_ANSWER', 'succes');
        }
      }).catch(commit('SET_ANSWER', 'fail'));
    },
    fetchUserData ({ commit, rootGetters }) {
      fetch('http://89.108.98.57:1337/api/users/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        commit('SET_AUTORIZEDUSER', data)
        commit('parents/SET_PARENTS', data.parents, { root: true })
        commit('children/SET_CHILDREN', data.childrens, { root: true })
      })
    },
    fetchOrder ({ rootGetters }, order) {
      fetch('http://89.108.98.57:1337/api/orders', {
        method: 'POST',
        body: JSON.stringify({
            data: {
              date: order.date,
              number: order.date,
              price: order.price,
              tour: order.order_name,
              type: order.order_type,
              cashback: order.order_cashback,
              parents: order.parent,
              children: order.child,
              user: order.user,
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
    }
  },
  getters: {
    GET_PROFILE: (state) => {
      return state.profile;
    },
    GET_TOKEN: (state) => {
      return state.token;
    },
    GET_AUTORISATION: (state) => {
      return state.autorisation;
    },
    GET_ANSWER: (state) => {
      return state.answer;
    },
    GET_AUTORIZEDUSER: (state) => {
      return state.authorizedUser;
    },
  }
};