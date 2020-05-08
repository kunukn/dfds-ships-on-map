const ENV = process.env.ENV

const API_BASE_URL = {
  PROD: 'https://dfds-ships-on-map.kunukn.now.sh/api',
  DEV: 'http://localhost:5557/api',
}

export const apiBaseUrl = API_BASE_URL[ENV]
