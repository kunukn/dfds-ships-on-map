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
        font-size: 20px;
        line-height: 1.5;
        color: white;
        background: rgba(#4d4e4c, 0.5);
        text-align: left;
        padding: 0 10px;
      }
    `}</style>
  </>
);

export default MainFooter;
