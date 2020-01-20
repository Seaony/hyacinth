import Vue from 'vue'
import routes from './routes'
import Router from 'vue-router'

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

  return router
}
