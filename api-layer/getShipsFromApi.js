import fetch from 'isomorphic-unfetch';
import { apiBaseUrl } from '~/constants/urls';

const options = {
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export default async function getShipsFromApi() {
  try {
    //`https://api.hellman.oxygen.dfds.cloud/dev/vessel/api/v1/Ships`;
    let url = `${apiBaseUrl}/get-ships`;

    if (process.env.NODE_ENV === 'development') {
      url = `${apiBaseUrl}/mock-ships`;
    }

    const response = await fetch(url, options);
    let json = await response.json();

    return json;
  } catch (ex) {
    console.error(ex.toString());
    return null;
  }
}
