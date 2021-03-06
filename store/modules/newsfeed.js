export default {
  state: {
    items: {},
  },

  actions: {
    async getNewsFeed ({ commit }) {
      const result = await this.$axios.$get('/news', {
        params: {
          _sort: 'createdAt:desc' // Generates http://localhost:1337/posts?_sort=createdAt:desc
        }
      })
      .then(result => {
        // Handle success.
        commit('setNewsFeed', result)
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error)
      })
    },

    async submitNews ({ dispatch }, data) {
      try {
        let response
        if (data.id) {
          response = await this.$axios.$put(`/news/${data.id}`, {
            title: data.title,
            text: data.text
          })
        } else {
          response = await this.$axios.$post('/news', {
            title: data.title,
            text: data.text
          })
        }
        dispatch('getNewsFeed')
      } catch (error) {
        console.log('An error occurred:', error)
      }
    },

    deleteNews ({ dispatch }, newsId) {
      this.$axios.$delete(`/news/${newsId}`)
      .then(response => {
        // Handle success.
        dispatch('getNewsFeed')
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error)
      })
    }
  },

  mutations: {
    setNewsFeed (state, items) {
      state.items = items
    }
  },

  getters: {
    
  }
}