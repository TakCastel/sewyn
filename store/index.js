import Vuex from 'vuex'

import auth from './modules/auth'
import newsfeed from './modules/newsfeed'
import forum from './modules/forum'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      newsfeed,
      forum,
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