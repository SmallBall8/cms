import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const LOGIN_TOKEN = 'login/token'
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '', //表示下次登录得时候看有没有localstorage,没有的话就''
    name: ''
  }),
  actions: {
    async LoginAccountAction(account: IAccount) {
      //1.帐号登录，获取token等信息
      const loginResult = await accountLoginRequest(account)
      console.log(loginResult)
      this.id = loginResult.data.id
      this.token = loginResult.data.token
      this.id = loginResult.data.id

      //2.对信息进行本地缓存
      //localStorage.setItem('token', this.token)
      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})

export default useLoginStore
