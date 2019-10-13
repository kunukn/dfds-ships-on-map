import { useStore, Subscribe } from 'laco-react';
import Collapse from '@kunukn/react-collapse';
import cx from 'clsx';

import store from '~/store.js';
import FullscreenEnterIcon from '~/public/static/icons/FullscreenEnter.svg';
import FullscreenExitIcon from '~/public/static/icons/FullscreenExit.svg';
import DFDSLogo from '~/public/static/icons/DFDSLogo.svg';
import NextIcon from '~/public/static/icons/Next.svg';
import SettingsIcon from '~/public/static/icons/Settings.svg';
import CloseIcon from '~/public/static/icons/Close.svg';
import UserIcon from '~/public/static/icons/User.svg';
import SearchIcon from '~/public/static/icons/Search.svg';
import TrackingPinShip from '~/public/static/icons/TrackingPinShip.svg';
import MapNavigation from '~/public/static/icons/MapNavigation.svg';
import UpIcon from '~/public/static/icons/Up.svg';
import getQueryParams from '~/utils/getQueryParams';
import { zoomToShip, zoomToTerminal } from '~/utils/mapUtil';
import { StaticStyles, DynamicStyles } from './MainHeader.styles';
import LeftSidebar from '~/components/left-sidebar/LeftSideBar';

const onOptionsToggle = () =>
  store.set(state => ({ isOptionsOpen: !state.isOptionsOpen }));
const onOptionsClose = () => store.set(state => ({ isOptionsOpen: false }));

const MainHeader = ({ lastUpdated, ships = [], terminals = [] }) => {
  const { isFullscreen, isOptionsOpen } = useStore(store);

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

  return (
    <>
      <Subscribe to={[store]}>
        {storeState => (
          <>
            <LeftSidebar ships={ships} terminals={terminals} />

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
                onClick={onOptionsToggle}
              >
                <SettingsIcon className="settings-icon" />
              </button>
            </div>
            <div
              className="menu-overlay"
              style={{
                transform: isOptionsOpen
                  ? 'translateY(0)'
                  : 'translateY(-100%)',
              }}
            >
              <div className="menu-overlay-header">
                <button
                  aria-label="close"
                  className="button-menu-overlay-close"
                  onClick={onOptionsClose}
                >
                  <CloseIcon />
                </button>
              </div>
              <div className="menu-overlay-content">menu overlay</div>
            </div>
          </>
        )}
      </Subscribe>

      <style jsx>{`
        .menu-overlay {
          position: absolute;
          top: 0;
          right: 0;
          transform: translateY(-100%);
          transition: transform 260ms;
          background: white;
          min-height: 200px;
          min-width: 200px;
          z-index: 1;
        }
        .menu-overlay-header {
          display: flex;
          padding: 10px;
          background: #eee;
        }
        .button-menu-overlay-close {
          margin-left: auto;
          font-size: 20px;
          > :global(svg) {
          }
        }
        .button-group {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          flex-wrap: wrap;
          height: 60px;
          _width: 200px;
          position: absolute;
          top: 0;
          right: 0;
          color: #002b45;
          pointer-events: all;
        }
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          margin: 10px;
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
        :global(.fullscreen-exit-icon) {
          display: block;
        }
        :global(.fullscreen-enter-icon) {
          display: block;
        }
      `}</style>
    </>
  );
};

export default MainHeader;

const fullscreenWasToggled = () =>
  store.set(state => ({ isFullscreen: !state.isFullscreen }));
