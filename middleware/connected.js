export default function ({ store, redirect, commit }) {
  const jwtToken = store.state.auth.session.jwt
  if (jwtToken) {
    return redirect('/')
  }
}
