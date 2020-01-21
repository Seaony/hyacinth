import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'
import NProgress from 'nprogress'

Vue.use(Router)

const router = createRouter()

export default router

/**
 * The router factory
 */
function createRouter () {
  const router = new Router({
    routes,
    base: process.env.BASE_URL,
    mode: 'history'
  })

  router.afterEach(afterEach)
  router.beforeEach(beforeEach)

  return router
}

/**
 * Global router guard.
 *
 * @param to
 * @param from
 * @param next
 * @param redirect
 * @returns {Promise<void>}
 */
async function beforeEach (to, from, next, redirect) {
  NProgress.start()

  if (!localStorage.token && to.name.substr(0, to.name.lastIndexOf('.')) !== 'auth') {
    next({ name: 'auth.login' })
  } else {
    next()
  }
}

/**
 * Global after hook.
 *
 * @param to
 * @param from
 * @param next
 * @returns {Promise<void>}
 */
async function afterEach (to, from, next) {
  NProgress.done()
}
