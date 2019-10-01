import { useStore } from "laco-react";
import { Subscribe } from "laco-react";

import store from "~/store.js";
import FullscreenEnterIcon from "~/static/icons/fullscreen-enter.svg";
import FullscreenExitIcon from "~/static/icons/fullscreen-exit.svg";

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
            <div className="logo">DFDS Ships</div>
            <div>
              {storeState.isFullscreenSupported && (
                <button
                  className="toggle-full-screen"
                  onClick={fullscreenWasToggled}
                >
                  {storeState.isFullscreen ? (
                    <FullscreenExitIcon className="fullscreen-exit-icon" />
                  ) : (
                    <FullscreenEnterIcon className="fullscreen-exit-icon" />
                  )}
                </button>
              )}
            </div>
          </header>
        )}
      </Subscribe>

      <style jsx>{`
        .main-header {
          height: 40px;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          font-size: 14px;
          color: white;
          text-align: left;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
        }
        .logo {
          font-size: 20px;
          padding: 4px 8px;
          background: rgba(#4d4e4c, 0.5);
        }
        .toggle-full-screen {
          color: white;
          font-size: 24px;
          margin: 0;
          border: none;
          margin: 4px;
          line-height: 1;
          background: transparent;
          background: rgba(#4d4e4c, 0.5);
          color: white;
          fill: white;
          padding: 0;
          display: block;
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
          opacity: ${isFullscreen ? 0.7 : ""};
        }
        .toggle-full-screen {
          opacity: ${isFullscreen ? 0.7 : ""};
        }
      `}</style>
    </>
  );
};

export default MainHeader;
