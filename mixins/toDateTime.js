import moment from 'moment'

const dateTime = {
  methods: {
    formatDate (date) {
      return moment(date).locale('fr').format(`DD MMMM Y à HH:MM`)
    },
  },
}

export default dateTime