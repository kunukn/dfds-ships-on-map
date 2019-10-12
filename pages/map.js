// http://api.dfds.cloud/prod/voyage/swagger/index.html

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useStore } from 'laco-react';
import { useLocalStorage } from 'react-use';
import cx from 'clsx';
import dynamic from 'next/dynamic';

import getQueryParams from '~/utils/getQueryParams';
import TrackingPinRailway from '~/public/static/icons/TrackingPinRailway.svg';
import TrackingPinShip from '~/public/static/icons/TrackingPinShip.svg';
import TrackingPinTruck from '~/public/static/icons/TrackingPinTruck.svg';
import mapRef from '~/mapRef.js';
import store from '~/store.js';
import getShipsFromApi from '~/api-layer/getShipsFromApi';
import MainHeader from '~/components/main-header';
import MainFooter from '~/components/main-footer';
import arrayToObject from '~/utils/arrayToObject';
import {
  addShipMarkerToMap,
  createDivShipMarker,
  createShipMarker,
  addShipsToMap,
  addPortsToMap,
  addRoutes,
} from '~/utils/mapUtil';
import terminals from '~/data-layer/terminals';
import ports from '~/data-layer/ports';

const TabMenuRight = dynamic(
  import('~/components/tab-menu-right/TabMenuRight'),
  {
    ssr: false,
  }
);

const isDevelopment = process.env.NODE_ENV === 'development';
let portsAndTerminals = ports.concat(terminals);
let intervalKey = null;
const threeMinutes = 1000 * 60 * 3;
const fiveSeconds = 1000 * 5;
let dataUpdateInterval = isDevelopment ? fiveSeconds : threeMinutes;

const Map = props => {
  const { isFullscreen, logs, ships = [] } = useStore(store);
  let [logTab, setLogTab] = useState(false);
  let [shipsState, setShipsState] = useState(ships);
  let [lastUpdated, setLastUpdated] = useState(new Date(props.currentDate));
  let [storageValue, setStorageValue] = useLocalStorage('dfds-ships', {});
  let map = useRef({}).current;
  let isFirstRender = useRef(true);

  // DOM init draw
  useEffect(() => {
    mapRef.init();
    map = mapRef.get();

    store.set(state => {
      state.logs.push(`ships updated:
      ${lastUpdated.toUTCString()}`);
      state.logs.push('App rendered.');
      return { ...state };
    });

    //setStorageValue({ ships: shipsState, date: Date.now() });
    window.ships = shipsState;
    const params = getQueryParams();

    if (params.logs) {
      setLogTab(true);
    }

    let latitude = isNumber(+params.lat) ? +params.lat : 55.676098;
    let longitude = isNumber(+params.lng) ? +params.lng : 12.568337;
    let zoomLevel = isNumber(+params.zoom) ? +params.zoom : 6;

    L.control
      .zoom({
        position: 'bottomleft',
      })
      .addTo(map);

    map.setView([latitude, longitude], zoomLevel);

    !isDevelopment &&
    L.tileLayer(
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${process.env.mapBoxToken}`,
      {
        maxZoom: 18,
        id: 'mapbox.streets',
      }
    ).addTo(map);
  }, []);

  // fetch ships initially and add to map
  useEffect(() => {
    let fetchDataAndUpdateState = async () => {
      let ships = await getShipsFromApi();
      setShipsState(ships);
      let updated = new Date(Date.now());
      setLastUpdated(updated);
      addShipsToMap({ ships, map });
    };

    if (ships.length) {
      let updated = new Date(Date.now());
      setLastUpdated(updated);
      addShipsToMap({ ships, map });
    } else {
      fetchDataAndUpdateState();
    }
  }, []);

  // add ports and routes to map
  useEffect(() => {
    addPortsToMap({ ports: portsAndTerminals, map });
    addRoutes({ map });
  }, []);

  // real-time update
  useEffect(() => {
    intervalKey = setInterval(async () => {
      let ships = await getShipsFromApi();
      if (ships && ships.length) {
        setShipsState(ships);
        let updated = new Date(Date.now());
        setLastUpdated(updated);
        store.set(state => {
          state.logs = [
            `ships updated:
          ${updated.toUTCString()}`,
            ...state.logs,
          ];

          // Max length for array to avoid DOM slowness.
          if (state.logs.length > 20) {
            state.logs.length = 20;
          }

          return Object.assign({}, state);
        });
      }
    }, dataUpdateInterval);

    return () => clearInterval(intervalKey);
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    updateMarkerPosition({ ships: shipsState, map: mapRef.get() });
  }, [shipsState]);

  return (
    <>
      <Head>
        <title>DFDS Ships on map</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <>
        <div id="mapid"></div>
        <MainHeader lastUpdated={lastUpdated} ships={shipsState} />
        <MainFooter lastUpdated={lastUpdated} />
        <TabMenuRight
          isOpen={logTab}
          onToggle={() => setLogTab(s => !s)}
          isFullscreen={isFullscreen}
          title="logs"
        >
          {logs.map((log, index) => (
            <div className="log-item" key={index}>
              {log}
            </div>
          ))}
        </TabMenuRight>
      </>

      <style jsx>{`
        .log-item {
          background: white;
          margin-bottom: 8px;
          line-height: 1;
          padding: 4px;
        }

        :global(.leaflet-control-zoom) {
          __outline: 1px solid red;
          __position: relative;
          bottom: 40px;
        }
      `}</style>
    </>
  );
};

/* Server-side */
Map.getInitialProps = async ({ req, query }) => {
  // let shipsProp = await getShipsFromApi({ useProxy: false });
  // return { shipsProp, currentDate: Date.now() };

  return { currentDate: Date.now() };
};

export default Map;

// Only works client-side.
let updateMarkerPosition = ({ ships, map }) => {
  try {
    if (typeof window === 'object' && map && Array.isArray(ships)) {
      if (!ships.length) {
        // remove all markers from map because the API now says array is empty?
      } else {
        const shipsDataObject = arrayToObject(ships, 'imo');

        // convert to HashSet
        let shipMarkersOnMap = [];
        map.eachLayer(layer => {
          if (layer.isShipMarker) shipMarkersOnMap.push(layer);
        });
        const shipsOnMapObject = arrayToObject(shipMarkersOnMap, 'shipImo');

        // convert to HashSet
        const divShipMarkersOnMap = [];
        map.eachLayer(layer => {
          if (layer.isDivShipMarker) divShipMarkersOnMap.push(layer);
        });
        const divShipsOnMapObject = arrayToObject(
          divShipMarkersOnMap,
          'shipImo'
        );

        map.eachLayer(layer => {
          let ship = shipsDataObject[layer.shipImo];
          if (layer.isShipMarker && ship) {
            // update position
            if (ship.position) {
              layer.setLatLng(L.latLng(ship.position.lat, ship.position.lng));
              // update div related to the ship
              let divShip = divShipsOnMapObject[layer.shipImo];
              if (divShip) {
                divShip.setLatLng(
                  L.latLng(ship.position.lat, ship.position.lng)
                );
                let rotate = 0;
                if (ship.navigation && ship.navigation.heading) {
                  rotate = Number(ship.navigation.heading) || 0;
                  rotate = Math.min(Math.max(rotate, 0), 360);
                }
                //console.log(divShip);
                let shipDivMarkerContentEl = document.getElementById(
                  `shipDivMarkerContent${ship.imo}`
                );
                if (shipDivMarkerContentEl) {
                  let direction = shipDivMarkerContentEl.querySelector(
                    '.ship-div-marker-icon__direction'
                  );
                  if (direction) {
                    let currentRotate =
                      Number(direction.dataset && direction.dataset.rotate) ||
                      0;

                    if (currentRotate !== rotate) {
                      // Only update DOM if different from previous.
                      direction.style.transform = `rotate(${rotate}deg`;
                    }
                  }
                }
              }
            }
          } else if (layer.isShipMarker) {
            // remove marker not existing in data from map.
            map.removeLayer(layer);
            // update div related to the ship
            let divShip = divShipsOnMapObject[layer.shipImo];
            if (divShip) {
              map.removeLayer(divShip);
            }
          }

          ships.forEach(ship => {
            let shipOnMap = shipsOnMapObject[ship.imo];
            if (!shipOnMap) {
              // TODO: all new ship from data which are not already in map. Add new marker.
              // TODO: update div related to the ship
            }
          });
        });
      }
    }
  } catch (ex) {
    console.error(ex + '');
  }
};

const isNumber = n => !isNaN(n);
