export default {
  state: {
    topics: []
  },

  actions: {
    async getTopics ({ commit }) {
      const result = await this.$axios.$get('/topics', {
        params: {
          _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
        }
      })
      .then(result => {
        // Handle success.
        commit('setTopics', result)
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error)
      })
    },
  },

  mutations: {
    setTopics (state, topics) {
      state.topics = topics
    }
  },

  getters: {

  }
}