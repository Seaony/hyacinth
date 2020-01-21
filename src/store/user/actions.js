/**
 * Get current user
 *
 * @param commit
 * @returns {Promise<void>}
 */
export const getUserProfile = async ({ commit }) => {
  const { data } = {
    name: '明城结日奈',
    avatar: 'https://cdn.learnku.com/uploads/avatars/17036_1575693310.jpg!/both/100x100'
  }
  commit('USER_REFRESH', data)
}
