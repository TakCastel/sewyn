import { mapState } from 'vuex'

const userData = {
  computed: {
    ...mapState({
      permission: state => state.auth.session.user.role.type,
      username: state => state.auth.session.user.username,
      auth: state => state.auth.isAuthenticated,
    }),
  },
}

export default userData