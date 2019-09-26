const ENV = process.env.ENV;

const API_BASE_URL = {
  PROD: 'https://ships-on-map.kunukn.now.sh/api',
  DEV: '//localhost:5557/api',
};

export const apiBaseUrl = API_BASE_URL[ENV];
