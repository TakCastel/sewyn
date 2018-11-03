import { mapState } from 'vuex'

const userData = {
  computed: {
    ...mapState({
      permission: state => state.auth.session.user.role.type,
      username: state => state.auth.session.user.username,
      auth: state => state.auth.isAuthenticated,
    }),
  },

  watch: {
    permission: function (value) {
      this.permission = value
    }
  }
}

export default userData