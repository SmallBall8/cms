import { defineStore } from 'pinia'
import { accountLoginRequest, getUserInfoById, getUserMenuByRoledId } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import router from '@/router'
import { LOGIN_TOKEN } from '@/global/constants'

interface ILoginState {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    //如何指定state的类型
    token: localCache.getCache(LOGIN_TOKEN) ?? '', //表示下次登录得时候看有没有localstorage,没有的话就''
    userInfo: localCache.getCache('userInfo') ?? {},
    userMenus: localCache.getCache('userMenus') ?? []
  }),
  actions: {
    async LoginAccountAction(account: IAccount) {
      //1.帐号登录，获取token等信息
      const loginResult = await accountLoginRequest(account)
      console.log('account', loginResult)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      const name = loginResult.data.name

      //localStorage.setItem('token', this.token)
      localCache.setCache(LOGIN_TOKEN, this.token)

      //3.在跳转页面前，获取登录用户的详细信息（role信息）
      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo
      console.log('角色', this.userInfo.role)
      console.log('角色id', this.userInfo.role.id)

      //4.根据角色请求用户的权限（菜单menus)
      const userMenuResult = await getUserMenuByRoledId(this.userInfo.role.id)
      console.log('menuresult', userMenuResult)
      //console.log(userMenuResult)
      const userMenus = userMenuResult.data
      this.userMenus = userMenus

      //2.对信息进行本地缓存

      localCache.setCache('userMenus', userMenus)
      localCache.setCache('userInfo', userInfo)
      console.log('hahah', userMenus)

      //5.页面跳转（main页面）
      //既然要进行页面跳转的话，需要先拿到router
      router.push('/main')
    }
  }
})

export default useLoginStore
