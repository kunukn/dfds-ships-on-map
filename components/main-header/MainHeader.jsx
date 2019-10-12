import { useStore, Subscribe } from 'laco-react';

import store from '~/store.js';
import FullscreenEnterIcon from '~/public/static/icons/FullscreenEnter.svg';
import FullscreenExitIcon from '~/public/static/icons/FullscreenExit.svg';
import DFDSLogo from '~/public/static/icons/DFDSLogo.svg';
import NextIcon from '~/public/static/icons/Next.svg';
import SettingsIcon from '~/public/static/icons/Settings.svg';
import UserIcon from '~/public/static/icons/User.svg';
import SearchIcon from '~/public/static/icons/Search.svg';
import TrackingPinShip from '~/public/static/icons/TrackingPinShip.svg';
import MapNavigation from '~/public/static/icons/MapNavigation.svg';
import UpIcon from '~/public/static/icons/Up.svg';
import getQueryParams from '~/utils/getQueryParams';
import { zoomToShip, zoomToTerminal } from '~/utils/mapUtil';
import { StaticStyles, DynamicStyles } from './MainHeader.styles';

const MainHeader = ({ lastUpdated, ships = [], terminals = [] }) => {
  const { isFullscreen } = useStore(store);

  const [leftSidebarToggle, setLeftSidebarToggle] = React.useState(false);
  const [shipSearchArea, setShipSearchArea] = React.useState(true);
  const [terminalSearchArea, setTerminalSearchArea] = React.useState(true);

  let isFirstRender = React.useRef(true);
  React.useEffect(() => {
    let params = getQueryParams();
    if (params.leftsidebar) {
      setLeftSidebarToggle(true);
    }

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

  let shipsSorted = ships.sort((a, b) => ('' + a.name).localeCompare(b.name));
  let terminalsSorted = terminals.sort((a, b) =>
    ('' + a.name).localeCompare(b.name)
  );

  return (
    <>
      <Subscribe to={[store]}>
        {storeState => (
          <header className="main-header">
            <aside
              className="left-sidebar"
              style={{
                transform: leftSidebarToggle
                  ? 'translateX(0)'
                  : 'translateX(-100%)',
              }}
            >
              <div className="left-sidebar-headline">Find</div>
              <div className="sidebar-content">
                <div className="search-header">
                  <div>
                    Zoom to <TrackingPinShip />
                  </div>
                  <button
                    onClick={() => setShipSearchArea(s => !s)}
                    aria-label="toggle ships"
                    className={
                      shipSearchArea
                        ? 'toggle toggle-show'
                        : 'toggle toggle-hide'
                    }
                  >
                    <UpIcon />
                  </button>
                </div>

                <div
                  className="search-area"
                  style={{ display: shipSearchArea ? '' : 'none' }}
                >
                  {shipsSorted.map(item => (
                    <div key={item.name} className="search-item">
                      <button
                        onClick={() => {
                          zoomToShip(item);
                        }}
                      >
                        {item.name}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="search-header">
                  <div>
                    Zoom to <MapNavigation />
                  </div>
                  <button
                    onClick={() => setTerminalSearchArea(s => !s)}
                    aria-label="toggle ships"
                    className={
                      terminalSearchArea
                        ? 'toggle toggle-show'
                        : 'toggle toggle-hide'
                    }
                  >
                    <UpIcon />
                  </button>
                </div>

                <div
                  className="search-area"
                  style={{ display: terminalSearchArea ? '' : 'none' }}
                >
                  {terminalsSorted.map(item => (
                    <div key={item.name} className="search-item">
                      <button
                        onClick={() => {
                          zoomToTerminal(item);
                        }}
                      >
                        {prettyTerminalName(item.name)}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setLeftSidebarToggle(s => !s);
                }}
                className="button-sidebar"
                aria-label="sidebar"
              >
                <div className="button-sidebar-content">
                  <NextIcon
                    style={{
                      transform: leftSidebarToggle
                        ? 'rotate(.5turn)'
                        : 'rotate(0)',
                    }}
                  />
                </div>
              </button>
            </aside>

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

              {/* <button
                className="button button-user"
                onClick={() => alert("TODO")}
                title="user"
              >
                <UserIcon className="user-icon" />
              </button> */}
              <button
                title="settings"
                className="button button-settings"
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
          font-size: 14px;
          color: #002b45;
          text-align: left;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-wrap: wrap;
          pointer-events: none;
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
          height: 40px;
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
          border: none;
          fill: $color-groupBlue;
        }
        .left-sidebar {
          pointer-events: all;
          position: relative;
          height: calc(100vh - 150px);
          max-height: calc(100vh - 150px);
          width: 200px;
          position: absolute;
          top: 5px;
          left: 0;
          background: rgba(white, 0.5);
          @supports (backdrop-filter: blur(10px)) {
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: saturate(180%) blur(4px);
          }
          transition: transform 300ms;
        }
        .button-sidebar-content {
          background: rgba(white, 0.5);
          @supports (backdrop-filter: blur(10px)) {
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: saturate(180%) blur(4px);
          }
          height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          > :global(svg) {
            transition: transform 300ms cubic-bezier(0, 1, 0, 1);
          }
        }
        .button-sidebar {
          position: absolute;
          right: -30px;
          width: 30px;
          top: 0;
          padding: 0;
          padding-right: 10px;
          color: $color-groupBlue;
          display: flex;
          justify: center;
          align-items: center;
          height: 50px;
          font-size: 20px;
        }
        .sidebar-content {
          position: absolute;
          top: 50px;
          left: 0;
          padding: 0 10px 10px;
          overflow: scroll;
          height: calc(100% - 50px);
          width: 100%;
        }
        .left-sidebar-headline {
          position: absolute;
          top: 0;
          left: 0;
          padding: 14px;
          width: 100%;
          height: 50px;
          line-height: 1;
          font-size: 20px;
        }
        :global(.fullscreen-exit-icon) {
          display: block;
        }
        :global(.fullscreen-enter-icon) {
          display: block;
        }
        .search-header {
          font-size: 20px;
          padding: 4px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
        }
        :global(.search-header ~ .search-header) {
          margin-top: 20px;
        }
        .search-area {
        }
        .search-item {
          margin-bottom: 10px;
          > button {
            font-size: inherit;
            cursor: pointer;
            padding: 4px;
            display: block;
            width: 100%;
            background: white;
            text-align: left;
          }
        }
        .toggle {
          cursor: pointer;
          padding: 0;
          text-align: left;

          margin-left: auto;
          display: inline-block;
          background: rgba(white, 0.5);
          border-radius: 50%;
          _padding: 2px;
          transition: transform 280ms cubic-bezier(0, 1, 0, 1);
          display: inline-block;
          font-size: 20px;
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .toggle-hide {
          transform: rotate(0.5turn);
        }
      `}</style>
      <style jsx>{``}</style>
    </>
  );
};

export default MainHeader;

const fullscreenWasToggled = () =>
  store.set(state => ({ isFullscreen: !state.isFullscreen }));

const prettyTerminalName = name => {
  if (name) {
    return name.replace('terminal', '');
  }
  return name;
};
