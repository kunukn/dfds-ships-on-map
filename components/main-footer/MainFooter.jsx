const MainFooter = ({ lastUpdated }) => (
  <>
    <footer className="main-footer">
      Last updated: {`${lastUpdated.toLocaleDateString()} ${lastUpdated.toLocaleTimeString()}`}
    </footer>
    <style jsx>{`
      .main-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 14px;
        line-height: 1.25;
        color: white;
        background: rgba(#4d4e4c, 0.5);
        text-align: left;
        padding: 0 10px;
        z-index: 1;
      }
    `}</style>
  </>
);

export default MainFooter;
