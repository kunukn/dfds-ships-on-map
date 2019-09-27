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
    let url = `https://api.hellman.oxygen.dfds.cloud/dev/vessel/api/v1/Ships`;
    url = `${apiBaseUrl}/mock-ships`;
    url = `${apiBaseUrl}/get-ships`;

    const response = await fetch(url, options);

    console.log(response);

    return await response.json();
  } catch (ex) {
    console.error(ex.toString());
    return null;
  }
}
