const ENV = process.env.ENV

const API_BASE_URL = {
  PROD: 'https://ships-on-map.kunukn.vercel.app/api',
  DEV: 'http://localhost:5557/api',
}

export const apiBaseUrl = '/api'
// export const apiBaseUrl = API_BASE_URL[ENV]
