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
const twoSeconds = 1000 * 2;

const Map = ({ shipsProp = [], currentDate = 0 }) => {
  let [tabs, setTabs] = useState({ values: [false, false, false, false] });
  let [shipsState, setShipsState] = useState(shipsProp);
  let [lastUpdated, setLastUpdated] = useState(new Date(currentDate));
  let [storageValue, setStorageValue] = useLocalStorage('dfds-ships', {});
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
        id: 'mapbox.streets',
      }
    ).addTo(map);

    addShipsToMap({ ships: shipsState, map });
  }, []);

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
        />
        <TabMenu
          level={1}
          isOpen={tabs.values[1]}
          onToggle={() => onTabsToggle(1)}
          isOtherOpen={isOtherTabMenuOpen(1)}
        />
        <TabMenu
          level={2}
          isOpen={tabs.values[2]}
          onToggle={() => onTabsToggle(2)}
          isOtherOpen={isOtherTabMenuOpen(2)}
        />
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
let updateMarkerPosition = ({ ships, map }) => {
  if (typeof window === 'object' && map && Array.isArray(ships)) {
    if (!ships.length) {
      // remove all markers from map because the API now says array is empty?
    } else {
      const shipsDataObject = arrayToObject(ships, 'imo');

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
const TabMenu = ({ isOpen, onToggle, isOtherOpen, level }) => {
  return (
    <>
      <div className="tab-menu">
        <div className="tab-menu-content">
          <div>content</div>
          <button className="tab-menu-close-button" onClick={onToggle}>
            close
          </button>
        </div>
        <button
          className="menu-text-toggle"
          onClick={onToggle}
          aria-label="tab1"
        >
          <b>t</b>
          <b>a</b>
          <b>b</b>
          <b>{level + 1}</b>
        </button>
      </div>

      <style jsx>{`
        .tab-menu {
          width: 200px;
          height: calc(100vh - 60px);
          max-height: 100vh;
          position: absolute;
          top: 40px;
          right: 0;
          transition: transform 300ms;
          transform: translateX(100%);
        }
        .tab-menu-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(#eee, 0.7);
          padding: 10px;
        }
        .tab-menu-close-button {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 16px;
          padding: 4px 8px;
          background: transparent;
          background: rgba(#4d4e4c, 0.5);
          color: white;
          border: 1px solid white;
          box-shadow: none;
          min-height: 30px;
          border-radius: 30px;
          line-height: 1;
          min-width: 4em;
        }
        .menu-text-toggle {
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
          border-color: white;
          box-shadow: none;
          font-size: 16px;
          position: absolute;
          left: -2em;
          background: white;
          width: 2em;
          height: 90px;
          top: ${level * 90 + level * 10}px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
          transition: opacity 300ms;
          z-index: 2;
          user-select: none;
        }
        .menu-text-toggle :global(b) {
          line-height: 1;
          display: block;
          font-weight: normal;
          text-transform: uppercase;
          user-select: none;
        }
      `}</style>
      <style jsx>{`
        .tab-menu {
          transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
          z-index: ${isOpen ? 1 : 0};
        }
        .menu-text-toggle {
          opacity: ${isOtherOpen ? 0 : ''};
        }
      `}</style>
    </>
  );
};
