export default {
  state: {
    content: []
  },

  actions: {
    async getContent ({ commit }) {
      const result = await this.$axios.$get('/categories', {
        params: {
          _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
        }
      })
      .then(result => {
        // Handle success.
        commit('setContent', result)
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error)
      })
    },
  },

  mutations: {
    setContent (state, content) {
      state.content = content
    }
  },

  getters: {

  }
}