import Vuex from 'vuex'

import auth from './modules/auth'
import newsfeed from './modules/newsfeed'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      newsfeed,
    },

    state: {
      
    },

    actions: {

    },

    mutations: {
      
    },

    getters: {

    }
  })
}

export default createStore