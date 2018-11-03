export default function ({ $axios, store }) {
  const jwtToken = store.state.authentication.jwtToken
  $axios.onRequest(config => {
    if (jwtToken) {
      config.headers.common['Authorization'] = `Bearer ${jwtToken}`
    }
  })
}