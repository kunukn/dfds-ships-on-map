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
                  Fullscreen {storeState.isFullscreen ? 'off' : 'on'}
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
          background: rgba(#4d4e4c, 0.5);
          text-align: left;
          padding: 4px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }
        .logo {
          font-size: 20px;
        }
        .toggle-full-screen {
          background: transparent;
          color: white;
          font-size: 16px;
          margin: 0;
          border: 1px solid currentColor;
          height: 24px;
          border-radius: 24px;
          line-height: 1;
          min-width: 8em;
          box-shadow: rgba(white, 0.2) 0px 0px 8px 0px;
        }
      `}</style>
    </>
  );
};

export default MainHeader;
