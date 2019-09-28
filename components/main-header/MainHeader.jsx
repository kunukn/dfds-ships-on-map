const MainHeader = ({ lastUpdated }) => (
  <>
    <header className="main-header">
      <div className="logo">DFDS Ships</div>
    </header>
    <style jsx>{`
      .main-header {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        __width: 100%;
        font-size: 14px;
        line-height: 1.25;
        color: white;
        background: rgba(#4d4e4c, 0.5);
        text-align: left;
        padding: 2px 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }
      .logo {
        font-size: 20px;
      }
      .last-updated {
        font-size: 14px;
      }
    `}</style>
  </>
);

export default MainHeader;
