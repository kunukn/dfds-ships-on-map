import React from "react";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

const Index = ({ ships = {} }) => {
  React.useEffect(() => {
    window.ships = ships;

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

    ships &&
      ships.length &&
      ships.forEach(ship => {
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
      </div>
      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
        }

        #mapid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};
Index.getInitialProps = async ({ req, query }) => {
  return await getData();
};

async function getData() {
  try {
    let url = `https://api.hellman.oxygen.dfds.cloud/dev/vessel/api/v1/Ships`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });

    let ships = await response.json();

    return Promise.resolve({ ships });
  } catch (ex) {
    console.error(ex.toString());
    return Promise.resolve({});
  }
}

export default Index;
