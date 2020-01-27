export default [
  // Auth
  {
    path: '/auth',
    name: 'auth.default',
    redirect: { name: 'auth.login' },
    component: () => import('@/views/layouts/authable.vue'),
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import('@/views/auth/login.vue')
      },
      {
        path: 'forget',
        name: 'auth.forget',
        component: () => import('@/views/auth/forget.vue')
      },
      {
        path: 'register',
        name: 'auth.register',
        component: () => import('@/views/auth/register.vue')
      }
    ]
  },

  // App
  {
    path: '/',
    name: 'layouts.default',
    component: () => import('@/views/layouts/default.vue'),
    children: [
      // 表单
      {
        path: '/forms/standard',
        name: 'forms.standard',
        component: () => import('@/views/forms/standard.vue')
      },
      {
        path: '/forms/steps',
        name: 'forms.steps',
        component: () => import('@/views/forms/steps.vue')
      },

      // 列表
      {
        path: '/listing/standard',
        name: 'listing.standard',
        component: () => import('@/views/listing/standard.vue')
      },
      {
        path: '/listing/cards',
        name: 'listing.cards',
        component: () => import('@/views/listing/cards.vue')
      },

      // 业务页面
      {
        path: '/business/chatrooms',
        name: 'business.chatrooms',
        component: () => import('@/views/business/chatrooms.vue')
      },
      {
        path: '/business/invoice',
        name: 'business.invoice',
        component: () => import('@/views/business/invoice.vue')
      },

      // 图标组件
      {
        path: '/icons/fontawesome',
        name: 'icons.fontawesome',
        component: () => import('@/views/icons/fontawesome.vue')
      },

      // 编辑器组件
      {
        path: '/editors/ueditor',
        name: 'editors.ueditor',
        component: () => import('@/views/editors/ueditor.vue')
      },

      // 图表组件
      {
        path: '/charts/bar',
        name: 'charts.bar',
        component: () => import('@/views/charts/bar.vue')
      },
      {
        path: '/charts/line',
        name: 'charts.line',
        component: () => import('@/views/charts/line.vue')
      },
      {
        path: '/charts/radar',
        name: 'charts.radar',
        component: () => import('@/views/charts/radar.vue')
      },

      // 异常
      {
        path: '/exceptions/401',
        name: 'exceptions.401',
        component: () => import('@/views/exceptions/401.vue')
      },
      {
        path: '/exceptions/403',
        name: 'exceptions.403',
        component: () => import('@/views/exceptions/403.vue')
      },
      {
        path: '/exceptions/404',
        name: 'exceptions.404',
        component: () => import('@/views/exceptions/404.vue')
      },
      {
        path: '/exceptions/500',
        name: 'exceptions.500',
        component: () => import('@/views/exceptions/500.vue')
      }
    ]
  }
]
