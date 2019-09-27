const MainHeader = () => (
  <>
    <header className="main-header">DFDS Ships</header>
    <style jsx>{`
      .main-header {
        position: absolute;
        top: 0;
        left: 0;
        __width: 100%;
        font-size: 16px;
        line-height: 1.25;
        color: white;
        background: rgba(#4d4e4c, 0.5);
        text-align: left;
        padding: 0 10px;
      }
    `}</style>
  </>
);

export default MainHeader;
