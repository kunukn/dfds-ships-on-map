import { useStore, Subscribe } from "laco-react";
import Collapse from "@kunukn/react-collapse";
import cx from "clsx";

import store from "~/store.js";
import NextIcon from "~/public/static/icons/Next.svg";
import TrackingPinShip from "~/public/static/icons/TrackingPinShip.svg";
import MapNavigation from "~/public/static/icons/MapNavigation.svg";
import UpIcon from "~/public/static/icons/Up.svg";
import { zoomToShip, zoomToTerminal } from "~/utils/mapUtil";

let onLeftSidebarToggle = value => {
  if (value === true || value === false) {
    store.set(state => ({ isLeftSidebarOpen: value }));
  } else {
    store.set(state => ({ isLeftSidebarOpen: !state.isLeftSidebarOpen }));
  }
};

const LeftSidebar = ({ ships = [], terminals = [] }) => {
  const { isFullscreen, isLeftSidebarOpen } = useStore(store);

  const [shipSearchArea, setShipSearchArea] = React.useState(true);
  const [terminalSearchArea, setTerminalSearchArea] = React.useState(true);

  let isFirstRender = React.useRef(true);
  React.useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isFullscreen && !document.fullscreenElement) {
      document.body.requestFullscreen().catch(err => {
        console.warn(err);
      });
    } else if (!isFullscreen && document.fullscreenElement) {
      document.exitFullscreen().catch(err => {
        console.warn(err);
      });
    }
  }, [isFullscreen]);

  let shipsSorted = React.useMemo(
    () => ships.sort((a, b) => ("" + a.name).localeCompare(b.name)),
    [ships]
  );

  let terminalsSorted = React.useMemo(
    () => terminals.sort((a, b) => ("" + a.name).localeCompare(b.name)),
    [terminals]
  );

  return (
    <>
      <aside
        className="sidebar"
        style={{
          transform: isLeftSidebarOpen ? "translateX(0)" : "translateX(-100%)"
        }}
      >
        <div className="sidebar-headline">Find</div>
        <div className="sidebar-content">
          <div className="sidebar-search-header">
            <div className="sidebar-search-header-info">
              <span>Zoom to</span> <TrackingPinShip />
            </div>
            <button
              onClick={() => setShipSearchArea(s => !s)}
              aria-label="toggle ships"
              className={
                shipSearchArea ? "toggle toggle-show" : "toggle toggle-hide"
              }
            >
              <UpIcon />
            </button>
          </div>

          <Collapse isOpen={shipSearchArea}>
            <div
              className={cx("sidebar-search-area", {
                "sidebar-search-area--is-open": shipSearchArea
              })}
            >
              <div className="ship-count">Ships: {shipsSorted.length}</div>
              {shipsSorted.map(item => (
                <div key={item.name} className="sidebar-search-item">
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
          </Collapse>

          <div className="sidebar-search-header">
            <div>
              Zoom to <MapNavigation />
            </div>
            <button
              onClick={() => setTerminalSearchArea(s => !s)}
              aria-label="toggle ships"
              className={
                terminalSearchArea ? "toggle toggle-show" : "toggle toggle-hide"
              }
            >
              <UpIcon />
            </button>
          </div>
          <Collapse isOpen={terminalSearchArea}>
            <div
              className={cx("sidebar-search-area", {
                "sidebar-search-area--is-open": terminalSearchArea
              })}
            >
              <div className="terminal-count">
                Terminals: {terminalsSorted.length}
              </div>
              {terminalsSorted.map(item => (
                <div key={item.name} className="sidebar-search-item">
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
          </Collapse>
        </div>

        <button
          onClick={onLeftSidebarToggle}
          className="button-sidebar"
          aria-label="toggle sidebar"
          title="toggle sidebar"
        >
          <div className="button-sidebar-content">
            <NextIcon
              style={{
                transform: isLeftSidebarOpen ? "rotate(.5turn)" : "rotate(0)"
              }}
            />
          </div>
        </button>
      </aside>

      <style jsx>{`
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

        .sidebar {
          color: $color-groupBlue;
          transition: transform 260ms cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: all;
          height: calc(100vh - 160px);
          max-height: calc(100vh - 160px);
          width: 200px;
          position: absolute;
          top: 10px;
          left: 0;
          background: rgba(white, 0.8);
          @supports (backdrop-filter: blur(10px)) {
            background-color: rgba(255, 255, 255, 0.5);
            backdrop-filter: saturate(180%) blur(4px);
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
          background: transparent;
        }
        .button-sidebar-content {
          background-color: rgba(white, 0.9);
          height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          > :global(svg) {
            transition: transform 260ms cubic-bezier(0, 1, 0, 1);
          }
        }
        .sidebar-content {
          position: absolute;
          top: 50px;
          left: 0;
          padding: 0 10px 10px;
          overflow-y: scroll;
          height: calc(100% - 50px);
          width: 100%;
        }
        .sidebar-headline {
          position: absolute;
          top: 0;
          left: 0;
          padding: 14px;
          width: 100%;
          height: 50px;
          line-height: 1;
          font-size: 24px;
        }

        .ship-count,
        .terminal-count {
          margin-bottom: 10px;
        }

        :global(.fullscreen-exit-icon) {
          display: block;
        }
        :global(.fullscreen-enter-icon) {
          display: block;
        }
        .sidebar-search-header {
          font-size: 20px;
          padding: 4px;
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-start;
          align-items: center;
          margin-bottom: 10px;
        }
        .sidebar-search-header-info {
          display: flex;
          align-items: center;
          > span {
            display: inline-block;
            margin-right: 6px;
          }
        }
        :global(.sidebar-search-header ~ .sidebar-search-header) {
          margin-top: 10px;
        }
        .sidebar-search-area {
          transition: opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.5;
        }
        .sidebar-search-area--is-open {
          opacity: 1;
        }
        .sidebar-search-item {
          margin-bottom: 10px;
          > button {
            font-size: inherit;
            cursor: pointer;
            padding: 4px;
            display: block;
            width: 100%;
            background: white;
            text-align: left;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
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
          transition: transform 260ms cubic-bezier(0, 1, 0, 1);
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
    </>
  );
};

export default LeftSidebar;

const prettyTerminalName = name => {
  if (name) {
    return name.replace("terminal", "");
  }
  return name;
};
