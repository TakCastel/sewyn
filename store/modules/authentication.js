export default {
  state: {
    isAuthenticated: false,
    jwtToken: localStorage.getItem('s_jwt') || null,
    user: null
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
      console.log(formData)
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

    logOut () {
      localStorage.clear()
      this.$router.push('/')
    }
  },

  mutations: {
    connectUser (state, response) {
      state.token = response.jwt
      state.user = response.user
      state.isAuthenticated = true
      localStorage.setItem('s_jwt', response.jwt)
    }
  },

  getters: {

  }
}