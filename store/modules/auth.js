export default {
  state: {
    isAuthenticated: localStorage.getItem('sewyn_session') ? true : false,
    session: JSON.parse(localStorage.getItem('sewyn_session')) || {
      jwt: null,
      user: {
        username: 'Anonymous',
        role: {
          type: 'guest'
        }
      }
    }
  },

  actions: {
    async registerUser ({ commit }, formData) {
      try {
        let response
        response = await this.$axios.$post('/auth/local/register', {
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
        commit('connectUser', response)   
        this.$router.push('/')
      } catch (error) {
        console.log('An error occurred:', error);
      }
    },

    async authenticateUser ({ commit }, formData) {
      try {
        let response
        response = await this.$axios.$post('/auth/local', {
          identifier: formData.identifier,
          password: formData.password
        })
        commit('connectUser', response)
        this.$router.push('/')
      } catch (error) {
        console.log('An error occurred:', error);
      }
    },

    logOut ({ commit }) {
      commit('disconnectUser')
      localStorage.clear()
      this.$router.push('/')
    }
  },

  mutations: {
    connectUser (state, response) {
      state.token = response.jwt
      state.user = response.user
      state.isAuthenticated = true

      this.$axios.setToken(response.jwt, 'Bearer')

      localStorage.setItem('sewyn_session', JSON.stringify(response))
    },

    disconnectUser (state) {
      state.token = null
      state.user = null
      state.isAuthenticated = false
    },
  }
}