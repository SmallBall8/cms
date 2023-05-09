import { createRouter, createWebHashHistory } from 'vue-router'
import { LOGIN_TOKEN } from '../global/constants'
import { localCache } from '@/utils/cache'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      //默认情况下
      path: '/',
      redirect: '/main'
    },
    {
      path: '/login',
      component: () => import('../views/login/Login.vue')
    },
    {
      path: '/main',

      component: () => import('../views/main/Main.vue'),
      children: [
        {
          path: '/main/analysis/overview',
          component: () => import('../views/main/analysis/overview/overview.vue')
        },
        {
          path: '/main/analysis/dashboard',
          component: () => import('../views/main/analysis/dashboard/dashboard.vue')
        },
        {
          path: '/main/system/user',
          component: () => import('../views/main/system/user/user.vue')
        },
        {
          path: '/main/system/role',
          component: () => import('../views/main/system/role/role.vue')
        },

      ]
    },
    {
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/NotFound.vue')
    }
  ]
})

//导航守卫
//参数：to(跳转到的位置)、from（从哪里跳转）
//返回值：返回值决定导航的路径（不返回或者返回undefined，就默认跳转）

router.beforeEach((to, from) => {
  if (to.path === '/main') {
    //只有登录成功，才能真正进入到main页面
    const token = localCache.getCache(LOGIN_TOKEN)
    if (!token) return '/login'
  }
})

export default router
