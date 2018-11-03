export default function ({ store }) {
  const jwtToken = store.state.auth.jwtToken
  if (jwtToken) {
    console.log('il y a un token')
    // store.dispatch('')
  }
}
