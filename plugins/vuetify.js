import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#54c4ac', // a color that is not in the material colors palette
    accent: colors.grey.darken3,
    secondary: 'c48454',
    info: colors.teal.lighten1,
    warning: colors.amber.base,
    error: '#f46242',
    success: colors.green.accent3
  }
})
