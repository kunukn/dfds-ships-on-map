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

    let CustomIcon = L.Icon.extend({
      options: {
        iconSize: [32, 32],
        shadowSize: [32, 32],
        iconAnchor: [16, 32],
        shadowAnchor: [4, 40],
        popupAnchor: [0, 0]
      }
    });

    var svgShip = `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
    <path fill="white" d="M6.074 12.889c0-5.963 4.852-10.815 10.815-10.815s10.815 4.851 10.815 10.815c0 2.312-1.438 5.798-3.886 9.497-.427-.263-1.012-.546-1.567-.546-1.038 0-1.143 1.024-2.19 1.024s-2.086-1.023-3.129-1.023l-.021-.002c-1.043 0-2.099 1.024-3.147 1.024s-1.084-1.024-2.122-1.024c-.567 0-1.156.295-1.576.563-2.546-3.771-3.992-7.194-3.992-9.514zM16.889 0C9.782 0 4 5.782 4 12.889c0 4.318 3.74 9.903 5.348 12.103.524.718 5.188 7.008 7.541 7.008 3.293 0 12.889-12.284 12.889-19.111C29.778 5.782 23.996 0 16.889 0z"></path>
    <path fill="black" d="M17.486 11.565c2.31.275 5.998 2.627 5.998 4.445l-1.49 4.796c-.687.22-.898.965-1.794.965-.989 0-2.062-.909-3.047-1.015l.333-9.191zm-6.988 4.445c0-1.818 3.689-4.17 5.998-4.445l.333 9.191c-.985.107-2.058 1.016-3.047 1.016-.896 0-1.106-.745-1.794-.966l-1.49-4.796zm1.929-6.014h9.066l-.025-.053c-.441-.936-.764-.917-3.138-.917h-2.741c-2.374 0-2.696-.019-3.138.917l-.025.053zm5.891-2.497h5.969l-.53 1.709h-1.291l.93 5.524c-.695-.948-1.887-2.263-3.134-2.981 1.5-.064 1.791-.293 1.515-1.089h-9.632c-.267.768-.005 1.008 1.363 1.082-1.415.806-2.594 2.318-3.115 3.425l1.091-5.961h-1.291l-.53-1.709h5.969l.904-3.454h.879l.905 3.454z"></path>
    </svg>`;

		/* 
    For data URI SVG support in Firefox & IE it's necessary to URI encode the string
    & replace the '#' character with '%23'. `encodeURI()` won't do this which is
    why `replace()` must be used on the string afterwards.
    */
    var url = encodeURI("data:image/svg+xml," + svgShip).replace('#', '%23');
    console.log(url);

    var shipIcon = new CustomIcon({ iconUrl: url })

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
        //L.marker([ship.position.lat, ship.position.lng]).addTo(map).bindPopup(ship.name);
        L.marker([ship.position.lat, ship.position.lng], { icon: shipIcon }).addTo(map).bindPopup(ship.name);
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
