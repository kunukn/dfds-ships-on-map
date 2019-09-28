const MainHeader = ({ lastUpdated }) => {
  let [isFullScreen, setIsFullScreen] = React.useState(false);

  let firstRun = React.useRef(true);
  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }

    if (isFullScreen) {
      document.body.requestFullscreen &&
        document.body.requestFullscreen().catch(err => {
          console.error(err);
        });
    } else {
      document.body.requestFullscreen &&
        document.exitFullscreen().catch(err => {
          console.error(err);
        });
    }
  }, [isFullScreen]);

  return (
    <>
      <header className="main-header">
        <div className="logo">DFDS Ships</div>
        <button
          className="toggle-full-screen"
          onClick={() => setIsFullScreen(s => !s)}
        >
          Toggle fullscreen
        </button>
      </header>
      <style jsx>{`
        .main-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          font-size: 14px;
          line-height: 1.25;
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
        }
      `}</style>
    </>
  );
};

export default MainHeader;
