import fetch from 'isomorphic-unfetch';
import { apiBaseUrl } from '~/constants/urls';

export default async function getShips(req, res) {
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

      let json = await response.json();

      return json;
    } catch (ex) {
      console.error('get-ships', ex.toString());
      return null;
    }
  }

  let ships = await getShipsFromApi();
  //console.log(ships)
  return res.json(ships);
}
