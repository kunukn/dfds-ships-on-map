import { useStore } from 'laco-react';
import { Subscribe } from 'laco-react';

import store from '~/store.js';

const fullscreenWasToggled = () =>
  store.set(state => ({ isFullscreen: !state.isFullscreen }));

const MainHeader = ({ lastUpdated }) => {
  const { isFullscreen } = useStore(store);

  let firstRun = React.useRef(true);
  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (isFullscreen) {
      document.body.requestFullscreen &&
        !document.fullscreenElement &&
        document.body.requestFullscreen().catch(err => {
          console.error(err);
        });
    } else {
      document.body.requestFullscreen &&
        document.fullscreenElement &&
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
                  fullscreen {storeState.isFullscreen ? 'off' : 'on'}
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
          font-size: 16px;
          margin: 0;
          border: 1px solid currentColor;
          margin: 4px;
          padding: 4px;
          min-height: 30px;
          border-radius: 30px;
          line-height: 1;
          min-width: 8em;
        }
      `}</style>
      <style jsx>{`
        .logo {
          opacity: ${isFullscreen ? 0.7 : ''};
        }
        .toggle-full-screen {
          background: rgba(#4d4e4c, 0.5);
          opacity: ${isFullscreen ? 0.7 : ''};
        }
      `}</style>
    </>
  );
};

export default MainHeader;
