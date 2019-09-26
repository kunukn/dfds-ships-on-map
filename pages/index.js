import React from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

let intervalKey = null;

const Index = ({ shipsProp = {} }) => {


  let [shipsState, setShipsState] = React.useState(shipsProp)
  let [lastUpdated, setLastUpdated] = React.useState(Date.now())

  false && React.useEffect(() => {

    // Cant fetch from client
    intervalKey = setInterval(async () => {
      let ships = await getShipsFromApi();
      if (ships && ships.length) {
        setShipsState(ships)
        setLastUpdated(Date.now())
      }

    }, 1000 * 5 * 60)

    return () => {
      clearInterval(intervalKey);
    }


  }, []);


  React.useEffect(() => {
    window.ships = shipsState;

    let latitude = 55.676098;
    let longitude = 12.568337;
    let zoomLevel = 4;

    const map = L.map("mapid").setView([latitude, longitude], zoomLevel);

    L.tileLayer(
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${process.env.mapBoxToken}`,
      {
        maxZoom: 18,
        attribution: `
          Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
            <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
            Imagery © <a href="https://www.mapbox.com/">Mapbox</a>
          `,

        id: "mapbox.streets"
      }
    ).addTo(map);

    shipsState &&
      shipsState.length &&
      shipsState.forEach(ship => {
        L.marker([ship.position.lat, ship.position.lng]).addTo(map).bindPopup(ship.name);
      });
  }, []);

  return (
    <>
      <Head>
        <title>DFDS Ships</title>
        <meta
          name="viewport"
          content="user-scalable=no, width=device-width, initial-scale=1"
          key="viewport"
        />
      </Head>
      <div className="page">
        <div id="mapid"></div>
        <header className="main-header">DFDS Ships</header>
        <footer className="main-footer">footer &copy; Last updated: {new Date(lastUpdated) + ''}</footer>
      </div>


      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
        }

        #mapid {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .main-header {
          position: absolute;
          top: 0;
          right: 0;
          max-width: calc(100% - 50px);
          font-size: 20px;
          line-height: 1.5;
          color: white;
          background: #4d4e4c;
          text-align: left;
          padding: 0 10px;

        }

        .main-footer {
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 20px;
          line-height: 1.5;
          color: white;
          background: #4d4e4c;
          text-align: left;
          padding: 0 10px;
        }

        :global(.leaflet-control-container){
            outline: 1px solid red;
        }
      `}</style>
    </>
  );
};
Index.getInitialProps = async ({ req, query }) => {
  return await getShipsFromApi();
};



async function getShipsFromApi() {
  try {
    let url = `https://api.hellman.oxygen.dfds.cloud/dev/vessel/api/v1/Ships`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

    let shipsProp = await response.json();

    return Promise.resolve({ shipsProp });
  } catch (ex) {
    console.error(ex.toString());
    return Promise.resolve({});
  }
}

export default Index;
