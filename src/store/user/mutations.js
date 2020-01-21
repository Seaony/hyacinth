/**
 * User login
 * @param state
 * @param token
 * @constructor
 */
export function USER_LOGIN (state, token, remember = true) {
  state.data = {}
  state.autherized = true
  if (remember) {
    localStorage.token = token
  }
  this.dispatch('getUserProfile')
}

/**
 * User logout
 *
 * @param state
 * @constructor
 */
export function USER_LOGOUT (state) {
  state.data = {}
  state.autherized = false
  localStorage.removeItem('token')
}

/**
 * Refresh current user
 *
 * @param state
 * @constructor
 */
export function USER_REFRESH (state, data) {
  state.data = data
}
