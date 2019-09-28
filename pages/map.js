// http://api.dfds.cloud/prod/voyage/swagger/index.html

import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useStore } from 'laco-react';
import { useLocalStorage } from 'react-use';

import mapRef from '~/mapRef.js';
import store from '~/store.js';
import getShipsFromApi from '~/api-layer/getShipsFromApi';
import MainHeader from '~/components/main-header';
import MainFooter from '~/components/main-footer';
import arrayToObject from '~/utils/arrayToObject';
import {
  addShipMarkerToMap,
  createShipMarker,
  addShipsToMap,
} from '~/utils/mapUtil';

let intervalKey = null;
const twoMinutes = 1000 * 60 * 2;
let map = null;

const Map = ({ shipsProp = [], currentDate = 0 }) => {
  //const {map} = useStore(store);

  let [shipsState, setShipsState] = useState(shipsProp);
  let [lastUpdated, setLastUpdated] = useState(new Date(currentDate));
  let [storageValue, setStorageValue] = useLocalStorage('dfds-ships', {});

  // real-time update
  useEffect(() => {
    intervalKey = setInterval(async () => {
      let ships = await getShipsFromApi();
      if (ships && ships.length) {
        setShipsState(ships);
        setLastUpdated(new Date(Date.now()));
      }
    }, twoMinutes);

    return () => clearInterval(intervalKey);
  }, []);

  // DOM init draw
  useEffect(() => {
    setStorageValue({ ships: shipsState, date: Date.now() });
    window.ships = shipsState;

    let latitude = 55.676098;
    let longitude = 12.568337;
    let zoomLevel = 5;

    //let map = mapRef.get();
    map = L.map('mapid').setView([latitude, longitude], zoomLevel);
    map.setView([latitude, longitude], zoomLevel);

    L.tileLayer(
      `https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=${process.env.mapBoxToken}`,
      {
        maxZoom: 18,
        id: 'mapbox.streets',
      }
    ).addTo(map);

    addShipsToMap({ ships: shipsState, map });
  }, []);

  let firstRun = useRef(true);

  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    updateMarkerPosition(shipsState);
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
      </>

      <style jsx>{`
        :global(.leaflet-control-zoom) {
          __outline: 1px solid red;
          __position: relative;
          top: 40px;
        }
      `}</style>
    </>
  );
};
Map.getInitialProps = async ({ req, query }) => {
  let shipsProp = await getShipsFromApi();
  return { shipsProp, currentDate: Date.now() };
};

export default Map;

// Only works client-side.
let updateMarkerPosition = shipsData => {
  if (typeof window === 'object' && map && Array.isArray(shipsData)) {
    if (!shipsData.length) {
      // remove all markers from map because the API now says array is empty?
    } else {
      const shipsDataObject = arrayToObject(shipsData, 'imo');

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
        const shipsOnMapObject = arrayToObject(shipMarkersOnMap, 'shipImo');

        shipsData.forEach(ship => {
          let shipOnMap = shipsOnMapObject[ship.imo];
          if (!shipOnMap) {
            // TODO: all new ship from data which are not already in map. Add new marker.
          }
        });
      });
    }
  }
};
