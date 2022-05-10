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
      state.profile = payload
    },
    SET_TOKEN(state, payload) {
      state.token = payload
    },
    SET_AUTORISATION(state, payload) {
      state.autorisation = payload
    },
    SET_ANSWER(state, payload) {
      state.answer = payload
    },
    SET_AUTORIZEDUSER(state, payload) {
      state.authorizedUser = payload
    },
  },
  actions: {
    fetchAutorisation ({ commit, getters }) {
      commit('SET_ANSWER', 'expect')
      fetch(process.env.VUE_APP_DOMAIN + '/auth/local', {
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
      });
    },
    fetchRegistration ({ commit, getters }) {
      commit('SET_ANSWER', 'expect')
      fetch(process.env.VUE_APP_DOMAIN + '/auth/local/register', {
        method: 'POST',
        body: JSON.stringify({
          sName: getters.GET_PROFILE.sName,
          username: getters.GET_PROFILE.email,
          fName: getters.GET_PROFILE.username,
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
        return response.json()
      }).then((data) => {
        if (data.jwt) {
          commit('SET_ANSWER', 'succes')
        }
        console.log(data)
        if (data.error.message === 'Email is already taken') {
          commit('SET_ANSWER', 'mailerr')
        }
      })
    },
    fetchUserData ({ commit, rootGetters }) {
      fetch(process.env.VUE_APP_DOMAIN + '/users/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json();
      }).then((data) => {
        commit('SET_AUTORIZEDUSER', data)
        commit('parents/SET_PARENTS', data.parents, { root: true })
        commit('children/SET_CHILDREN', data.childrens, { root: true })
      })
    },
    fetchOrder ({ rootGetters }, order) {
      fetch(process.env.VUE_APP_DOMAIN + '/orders', {
        method: 'POST',
        body: JSON.stringify({
            data: {
              date: order.date,
              number: order.date,
              price: String(order.price),
              tour: order.order_name,
              type: order.order_type,
              cashback: order.order_cashback,
              parents: order.parent,
              children: order.child,
              user: order.user,
              keeperField: String(order.order_id),
              changeable: order.changeable,
              users_permissions_user: String(rootGetters['profile/GET_AUTORIZEDUSER'].id)
          }
      }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': ('Bearer ' + rootGetters['profile/GET_TOKEN'])
        }
      }).then((response) => {
        return response.json()
      })
    },
    fetchRecovery ({ commit }, mail) {
      commit('SET_ANSWER', 'expect')
      console.log(mail)
      fetch('http://89.108.98.57:1337/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: mail
        })
      }).then((response)=> {
        return response.json()
      }).then((data)=> {
        if (data.ok) {
          commit('SET_ANSWER', 'succes')
        } else {
          commit('SET_ANSWER', 'recoveryErr')
        }
      })
    },
    async fetchPassword ({ commit }, props) {
      await fetch('http://89.108.98.57:1337/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          code: props.code,
          password: props.password,
          passwordConfirmation: props.passwordConfirmation
        })
      }).then((response)=> {
        return response.json()
      }).then((data)=> {
          console.log(data)
          localStorage.setItem('token', data.jwt)
          commit('SET_AUTORIZEDUSER', data.user)
          commit('SET_TOKEN', data.jwt)
          commit('parents/SET_PARENTS', data.user.parents, { root: true })
          commit('children/SET_CHILDREN', data.user.childrens, { root: true })
      })
    }
  },
  getters: {
    GET_PROFILE: (state) => {
      return state.profile
    },
    GET_TOKEN: (state) => {
      return state.token
    },
    GET_AUTORISATION: (state) => {
      return state.autorisation
    },
    GET_ANSWER: (state) => {
      return state.answer
    },
    GET_AUTORIZEDUSER: (state) => {
      return state.authorizedUser
    },
  }
};