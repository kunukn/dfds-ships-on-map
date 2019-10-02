import fetch from 'isomorphic-unfetch';
import { apiBaseUrl } from '~/constants/urls';

const options = {
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export default async function getTerminalsFromApi() {
  try {
    let url = `${apiBaseUrl}/get-terminals`;

    const response = await fetch(url, options);
    let json = await response.json();

    return json;
  } catch (ex) {
    console.error(ex.toString());
    return null;
  }
}
