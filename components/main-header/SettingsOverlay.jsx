import { useStore, Subscribe } from 'laco-react';
import cx from 'clsx';

import store from '~/store.js';
import CloseIcon from '~/public/static/icons/Close.svg';

const onClose = () => store.set(state => ({ isSettingsOpen: false }));

const SettingsOverlay = () => {
  const { isSettingsOpen } = useStore(store);

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
        <div className="settings-overlay-content">TODO: settings</div>
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
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          font-size: 16px;
        }
      `}</style>
    </>
  );
};

export default SettingsOverlay;

export const onSettingsToggle = () =>
  store.set(state => ({ isSettingsOpen: !state.isSettingsOpen }));
