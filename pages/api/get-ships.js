import fetch from 'isomorphic-unfetch';
import { apiBaseUrl } from '~/constants/urls';

async function getShipsFromApi() {
  try {
    let url = `https://api.hellman.oxygen.dfds.cloud/dev/vessel/api/v1/Ships`;
    //url = `${apiBaseUrl}/mock-ships`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    return await response.json();
  } catch (ex) {
    console.error('get-ships',ex.toString());
    return null;
  }
}

export default (req, res) => {
  return res.json(getShipsFromApi());
};
