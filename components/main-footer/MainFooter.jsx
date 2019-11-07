import DFDSLogo from '~/public/icons/DFDSLogo.svg';

const MainFooter = ({ lastUpdated }) => {
  return (
    <>
      <footer className="main-footer">
        <div className="last-updated">
          Updated: {`${lastUpdated.toUTCString()}`}
        </div>
        <div className="logo">
          <DFDSLogo />
        </div>
      </footer>
      <style jsx>{`
        .main-footer {
          pointer-events: none;
          position: absolute;
          bottom: 0;
          left: 0;
          font-size: 14px;
          line-height: 1.25;
          color: white;
          text-align: left;
          padding: 2px 4px;
          z-index: 1;
          display: flex;
          width: 100%;
        }
        .last-updated {
          font-size: 14px;
          background: rgba($color-groupBlue, 0.6);
          position: absolute;
          bottom: 0;
          left: 0;
        }
        .logo {
          position: absolute;
          bottom: 0;
          right: 0;
          pointer-events: none;
          margin: 2px;
          > :global(svg) {
            display: block;
            width: ${17 * 3.5}px;
            height: ${6 * 3.5}px;
            @media (min-width: 800px) {
              width: ${17 * 4}px;
              height: ${6 * 4}px;
            }
            @media (min-width: 1200px) {
              width: ${17 * 5}px;
              height: ${6 * 5}px;
            }
          }
        }
      `}</style>
    </>
  );
};

export default MainFooter;
