let BASE_URL = ''
if (import.meta.env.PROD) {
  //生产环境
  BASE_URL = 'http://111.230.245.205:8880'
} else {
  BASE_URL = 'http://111.230.245.205:8880'
}

export { BASE_URL }
export const TIME_OUT = 100000000
