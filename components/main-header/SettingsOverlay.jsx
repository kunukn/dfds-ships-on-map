import { useStore, Subscribe } from 'laco-react';
import cx from 'clsx';

import store from '~/store.js';
import CloseIcon from '~/public/static/icons/Close.svg';
import mapRef from '~/mapRef.js';
import tileLayerRef from '~/tileLayerRef.js';
import { tileLayerMapbox, tileLayerOpenStreetMaps } from '~/utils/mapUtil';

const onClose = () => store.set(state => ({ isSettingsOpen: false }));

const SettingsOverlay = () => {
  const { isSettingsOpen } = useStore(store);
  let [mapType, setMapType] = React.useState(1);
  let isFirstRender = React.useRef(true);

  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    let map = mapRef.get();

    let existingTileLayer = tileLayerRef.get();

    if (mapType === 1) {
      let tileLayer = L.tileLayer(tileLayerMapbox, {
        maxZoom: 18,
        id: 'mapbox.streets',
      });
      map.removeLayer(existingTileLayer);
      map.addLayer(tileLayer);
      tileLayerRef.set(tileLayer);
    } else {
      let tileLayer = L.tileLayer(tileLayerOpenStreetMaps, {
        maxZoom: 18,
      });
      map.removeLayer(existingTileLayer);
      map.addLayer(tileLayer);
      tileLayerRef.set(tileLayer);
    }
  }, [mapType]);

  return (
    <>
      <div
        className="settings-overlay"
        style={{
          transform: isSettingsOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="settings-overlay-header">
          <div>Settings</div>
          <button
            aria-label="close"
            className="button-settings-overlay-close"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="settings-overlay-content">
          <div className="radio-buttons">
            <form>
              <label>
                <span>MapBox map</span>
                <input
                  type="radio"
                  value="1"
                  checked={mapType === 1}
                  onChange={() => setMapType(1)}
                />
              </label>

              <label>
                <span>OpenStreetMaps map</span>
                <input
                  type="radio"
                  value="2"
                  checked={mapType === 2}
                  onChange={() => setMapType(2)}
                />
              </label>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .settings-overlay {
          color: $color-groupBlue;
          position: absolute;
          top: 0;
          right: 0;
          transform: translateY(-100%);
          transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
          background-color: rgba(white, 0.9);
          @supports (backdrop-filter: blur(4px)) {
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: saturate(180%) blur(4px);
          }
          height: 300px;
          width: 400px;
          max-height: 100vh;
          max-width: 90vw;
          min-width: 200px;
          z-index: 1;
          overflow: auto;
          border-bottom-left-radius: 10px;
        }
        .settings-overlay-header {
          font-size: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          background-color: rgba(white, 0.8);
          flex-wrap: wrap;
        }

        .button-settings-overlay-close {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          _background-color: rgba(white, 0.2);
          font-size: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50px;
          _margin-left: auto;
          color: $color-groupBlue;
          > :global(svg) {
          }
        }
        .settings-overlay-content {
          padding: 10px;
          font-size: 16px;
          
          :global(form){
            display: flex;
            flex-direction: column;
          }
          :global(label) {
            display: inline-block;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            align-self: flex-start;
          }
        }
      `}</style>
    </>
  );
};

export default SettingsOverlay;

export const onSettingsToggle = () =>
  store.set(state => ({ isSettingsOpen: !state.isSettingsOpen }));
