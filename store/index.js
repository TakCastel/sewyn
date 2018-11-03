import Vuex from 'vuex'

import authentication from './modules/authentication'
import newsfeed from './modules/newsfeed'

const createStore = () => {
  return new Vuex.Store({
    modules: {
      authentication,
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