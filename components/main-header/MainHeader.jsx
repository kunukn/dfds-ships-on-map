import { useStore } from 'laco-react';
import { Subscribe } from 'laco-react';

import store from '~/store.js';
import FullscreenEnterIcon from '~/static/icons/FullscreenEnter.svg';
import FullscreenExitIcon from '~/static/icons/FullscreenExit.svg';
import DFDSLogo from '~/static/icons/DFDSLogo.svg';
import SettingsIcon from '~/static/icons/Settings.svg';
import UserIcon from '~/static/icons/User.svg';

const fullscreenWasToggled = () =>
  store.set(state => ({ isFullscreen: !state.isFullscreen }));

const MainHeader = ({ lastUpdated }) => {
  const { isFullscreen } = useStore(store);

  let isFirstRender = React.useRef(true);
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isFullscreen && !document.fullscreenElement) {
      document.body.requestFullscreen().catch(err => {
        console.error(err);
      });
    } else if (!isFullscreen && document.fullscreenElement) {
      document.exitFullscreen().catch(err => {
        console.error(err);
      });
    }
  }, [isFullscreen]);

  return (
    <>
      <Subscribe to={[store]}>
        {storeState => (
          <header className="main-header">
            <div className="logo">
              <DFDSLogo className="dfds-logo" />
            </div>
            <div className="button-group">
              {storeState.isFullscreenSupported && (
                <button
                  className="toggle-full-screen"
                  onClick={fullscreenWasToggled}
                  title="toggle full screen"
                >
                  {storeState.isFullscreen ? (
                    <FullscreenExitIcon className="fullscreen-exit-icon" />
                  ) : (
                    <FullscreenEnterIcon className="fullscreen-exit-icon" />
                  )}
                </button>
              )}
              <button
                className="button-user"
                onClick={() => alert('TODO')}
                title="user"
              >
                <UserIcon className="user-icon" />
              </button>
              <button
                title="settings"
                className="button-settings"
                onClick={() => alert('TODO')}
              >
                <SettingsIcon className="settings-icon" />
              </button>
            </div>
          </header>
        )}
      </Subscribe>

      <style jsx>{`
        .main-header {
          height: 50px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          max-width: 1300px;
          font-size: 14px;
          color: #002b45;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          _background: rgba(white, 0.5);
        }
        .logo {
          display: flex;
          height: inherit;
          align-items: center;
          justify-content: stretch;
          padding-left: 10px;
        }
        .button-group {
          height: inherit;
          display: flex;
          background: rgba(white, 0.5);
          @supports (backdrop-filter: blur(10px)) {
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: saturate(180%) blur(4px);
          }
        }
        .button-settings {
          display: block;
          width: 50px;
          color: $color-groupBlue;
          cursor: pointer;
        }
        .button-user {
          display: block;
          width: 50px;
          color: $color-groupBlue;
          cursor: pointer;
        }
        .toggle-full-screen {
          font-size: 30px;
          margin: 0;
          border: none;
          line-height: 1;
          background: transparent;
          fill: $color-groupBlue;
          padding: 10px;
          width: 50px;
          display: block;
          cursor: pointer;
          > :global(svg) {
            _background: rgba($color-groupBlue, 0.5);
          }
        }
        :global(.fullscreen-exit-icon) {
          display: block;
        }
        :global(.fullscreen-enter-icon) {
          display: block;
        }
      `}</style>
      <style jsx>{`
        .logo {
          _opacity: ${isFullscreen ? 0.7 : ''};
        }
        .toggle-full-screen {
          _opacity: ${isFullscreen ? 0.7 : ''};
        }
      `}</style>
    </>
  );
};

export default MainHeader;
