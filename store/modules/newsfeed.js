export default {
  state: {
    items: {},
  },

  actions: {
    async getContent ({ commit }) {
      const result = await this.$axios.$get('/news', {
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
        dispatch('getContent')
      } catch (error) {
        console.log('An error occurred:', error)
      }
    },

    deleteNews ({ dispatch }, newsId) {
      console.log(newsId)
      this.$axios.$delete(`/news/${newsId}`)
      .then(response => {
        // Handle success.
        dispatch('getContent')
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error)
      })
    }
  },

  mutations: {
    setContent (state, items) {
      state.items = items
    }
  },

  getters: {
    
  }
}