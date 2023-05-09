import hyRequest from '..'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'
import { LOGIN_TOKEN } from '@/global/constants'

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}

export function getUserInfoById(id: number) {
  return hyRequest.get({
    url: `/users/${id}`,
    headers: {
      Authorization: 'Beaer' + ' ' + localCache.getCache(LOGIN_TOKEN)
    }
  })
}

export function getUserMenuByRoledId(id: number) {
  return hyRequest.get({
    url: `/role/${id}/menu`,
    headers: {
      Authorization: 'Beaer' + ' ' + localCache.getCache(LOGIN_TOKEN)
    }
  })
}
