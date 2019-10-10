import { useStore } from "laco-react";
import { Subscribe } from "laco-react";

import store from "~/store.js";
import FullscreenEnterIcon from "~/public/static/icons/FullscreenEnter.svg";
import FullscreenExitIcon from "~/public/static/icons/FullscreenExit.svg";
import DFDSLogo from "~/public/static/icons/DFDSLogo.svg";
import SettingsIcon from "~/public/static/icons/Settings.svg";
import UserIcon from "~/public/static/icons/User.svg";
import SearchIcon from "~/public/static/icons/Search.svg";

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
                  className="button toggle-full-screen"
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
{/* 
              <button
                className="button button-search"
                onClick={() => alert("TODO")}
                title="search"
              >
                <SearchIcon className="search-icon" />
              </button> */}

              <button
                className="button button-user"
                onClick={() => alert("TODO")}
                title="user"
              >
                <UserIcon className="user-icon" />
              </button> 
              <button
                title="settings"
                className="button button-settings"
                onClick={() => alert("TODO")}
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
          pointer-events: none;
          _background: rgba(white, 0.5);
        }
        .logo {
          display: flex;
          height: inherit;
          align-items: center;
          justify-content: stretch;
          padding-left: 10px;
          pointer-events: none;

          > :global(svg) {
            pointer-events: none;
          }
        }
        .button-group {
          pointer-events: all;
          height: inherit;
          display: flex;
          
        }
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          margin: 5px;
          color: $color-groupBlue;
          cursor: pointer;
          font-size: 20px;
          border-radius: 50%;
          background: rgba(white, 0.5);
          @supports (backdrop-filter: blur(10px)) {
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: saturate(180%) blur(4px);
          }
          > :global(svg) {
            _outline: 1px solid red;
          }
        }
        .toggle-full-screen {
          font-size: 30px;
          margin: 0;
          border: none;
          line-height: 1;
          background: transparent;
          fill: $color-groupBlue;
          cursor: pointer;
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
          _opacity: ${isFullscreen ? 0.7 : ""};
        }
        .toggle-full-screen {
          _opacity: ${isFullscreen ? 0.7 : ""};
        }
      `}</style>
    </>
  );
};

export default MainHeader;
