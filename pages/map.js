// http://api.dfds.cloud/prod/voyage/swagger/index.html

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import { useStore } from "laco-react";
import { useLocalStorage } from "react-use";

import TrackingPinRailway from "~/static/icons/TrackingPinRailway.svg";
import TrackingPinShip from "~/static/icons/TrackingPinShip.svg";
import TrackingPinTruck from "~/static/icons/TrackingPinTruck.svg";
import mapRef from "~/mapRef.js";
import store from "~/store.js";
import getShipsFromApi from "~/api-layer/getShipsFromApi";
import MainHeader from "~/components/main-header";
import MainFooter from "~/components/main-footer";
import TabMenu from "~/components/tab-menu/TabMenu";
import arrayToObject from "~/utils/arrayToObject";
import {
  addShipMarkerToMap,
  createShipMarker,
  addShipsToMap,
  addPortsToMap
} from "~/utils/mapUtil";

let intervalKey = null;
const twoMinutes = 1000 * 60 * 2;
const fiveSeconds = 1000 * 5;
let dataUpdateInterval =
  process.env.NODE_ENV === "development" ? fiveSeconds : twoMinutes;

const Map = () => {
  const { isFullscreen, logs, ships = [] } = useStore(store);
  let [tabs, setTabs] = useState({ values: [false, false, false, false] });
  let [shipsState, setShipsState] = useState(ships);
  let [lastUpdated, setLastUpdated] = useState(new Date(Date.now()));
  let [storageValue, setStorageValue] = useLocalStorage("dfds-ships", {});
  let map = useRef({}).current;
  let isFirstRender = useRef(true);

  let isOtherTabMenuOpen = index =>
    tabs.values.some((tab, i) => {
      if (index === i) return false;
      return !!tab;
    });

  let onTabsToggle = index => {
    setTabs(state => {
      let current = state.values[index];
      state.values = state.values.map(tab => false);
      if (!current) {
        state.values[index] = true;
      }
      return { ...state };
    });
  };

  // DOM init draw
  useEffect(() => {
    mapRef.init();
    map = mapRef.get();

    store.set(state => {
      state.logs.push(`ships last updated:
      ${lastUpdated.toUTCString()}`);
      state.logs.push("DOM init draw");
      return { ...state };
    });

    setStorageValue({ ships: shipsState, date: Date.now() });
    window.ships = shipsState;

    let latitude = 55.676098;
    let longitude = 12.568337;
    let zoomLevel = 5;

    map.setView([latitude, longitude], zoomLevel);

    L.tileLayer(
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${process.env.mapBoxToken}`,
      {
        maxZoom: 18,
        id: "mapbox.streets"
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

  // add ports to map
  useEffect(() => {
    let ports = [
      {
        name: "Calais terminal",
        position: { lat: 50.966269, lng: 1.862349 }
      },
      {
        name: "Dunkirk terminal",
        position: { lat: 51.016405, lng: 2.198786 }
      },
      {
        name: "Dover terminal",
        position: { lat: 51.128317, lng: 1.333217 }
      },
      {
        name: "Dieppe terminal",
        position: { lat: 49.93398, lng: 1.08966 }
      },
      {
        name: "Newhaven terminal",
        position: { lat: 50.793432, lng: 0.054003 }
      },
      {
        name: "Amsterdam (Ijmuiden) terminal",
        position: { lat: 52.462207, lng: 4.586865 }
      }
    ];
    addPortsToMap({ ports, map });
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
            `ships last updated:
          ${updated.toUTCString()}`,
            ...state.logs
          ];

          // Max length for array to avoid DOM slowness.
          if (state.logs.length > 20) {
            state.logs.length = 20;
          }

          return { ...state };
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
        <title>DFDS Ships</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
      <>
        <div id="mapid"></div>
        <MainHeader lastUpdated={lastUpdated} />
        <MainFooter lastUpdated={lastUpdated} />
        <TabMenu
          level={0}
          isOpen={tabs.values[0]}
          onToggle={() => onTabsToggle(0)}
          isOtherOpen={isOtherTabMenuOpen(0)}
          isFullscreen={isFullscreen}
          title="logs"
        >
          {logs.map((log, index) => (
            <div className="log-item" key={index}>
              {log}
            </div>
          ))}
        </TabMenu>
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
          top: 40px;
        }
      `}</style>
    </>
  );
};
// Map.getInitialProps = async ({ req, query }) => {
//   let shipsProp = await getShipsFromApi();
//   return { shipsProp, currentDate: Date.now() };
// };

export default Map;

// Only works client-side.
let updateMarkerPosition = ({ ships, map }) => {
  if (typeof window === "object" && map && Array.isArray(ships)) {
    if (!ships.length) {
      // remove all markers from map because the API now says array is empty?
    } else {
      const shipsDataObject = arrayToObject(ships, "imo");

      map.eachLayer(layer => {
        let ship = shipsDataObject[layer.shipImo];
        if (layer.isShipMarker && ship) {
          // update position
          layer.setLatLng(L.latLng(ship.position.lat, ship.position.lng));
        } else if (layer.isShipMarker) {
          // remove marker not existing in data from map.
          map.removeLayer(layer);
        }

        let shipMarkersOnMap = [];
        map.eachLayer(layer => {
          if (layer.isShipMarker) {
            shipMarkersOnMap.push(layer);
          }
        });
        const shipsOnMapObject = arrayToObject(shipMarkersOnMap, "shipImo");

        ships.forEach(ship => {
          let shipOnMap = shipsOnMapObject[ship.imo];
          if (!shipOnMap) {
            // TODO: all new ship from data which are not already in map. Add new marker.
          }
        });
      });
    }
  }
};
