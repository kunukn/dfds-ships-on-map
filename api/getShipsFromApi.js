import fetch from 'isomorphic-unfetch';

export default async function getShipsFromApi() {
  try {
    let url = `https://api.hellman.oxygen.dfds.cloud/dev/vessel/api/v1/Ships`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });

    let shipsProp = await response.json();

    return Promise.resolve({ shipsProp });
  } catch (ex) {
    console.error(ex.toString());
    return Promise.resolve({});
  }
}
