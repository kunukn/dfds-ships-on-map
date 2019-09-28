const MainFooter = ({ lastUpdated }) => (
  <>
    <footer className="main-footer">
      <div className="last-updated">
        Updated: {`${lastUpdated.toUTCString()}`}
      </div>
    </footer>
    <style jsx>{`
      .main-footer {
        pointer-events: none;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        font-size: 14px;
        line-height: 1.25;
        color: white;
        background: rgba(#4d4e4c, 0.5);
        text-align: left;
        padding: 2px 4px;
        z-index: 1;
        .last-updated {
          font-size: 14px;
        }
      }
    `}</style>
  </>
);

export default MainFooter;
