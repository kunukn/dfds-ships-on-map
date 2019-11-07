import { useStore } from "laco-react";

import store from "~/store.js";
import CloseSvg from "~/public/icons/close.svg";

const Tabs = ({ children}) => {
  const { isFullscreen } = useStore(store);

  return (
    <>
      <div className="tabs">
        
      </div>

      <style jsx>{`
        .tabs {
          width: 200px;
          height: calc(100vh - 60px);
          max-height: calc(100vh - 60px);
          position: absolute;
          top: 40px;
          right: 0;
          transition: transform 300ms;
          transform: translateX(100%);
        }
        .tab-menu-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(#eee, 0.95);
          padding: 40px 10px 10px;
          @supports (backdrop-filter: blur(10px)) {
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: saturate(180%) blur(12px);
          }
        }
        .tab-menu-close-button {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 16px;
          padding: 4px 8px;
          background: transparent;
          color: white;
          border: none;
          box-shadow: none;
          min-height: 30px;
          line-height: 1;
          color: gray;
        }
        .menu-text-toggle {
          border: 1px solid white;
          border-top-left-radius: 16px;
          border-bottom-left-radius: 16px;
          box-shadow: none;
          font-size: 16px;
          position: absolute;
          left: -2em;
          background: rgba(white, 0.95);
          width: 2em;
          height: 90px;
          top: ${level * 90 + level * 10}px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          opacity: 0.8;
          transition: opacity 300ms;
          z-index: 2;
          user-select: none;
        }
        .menu-text-toggle :global(b) {
          line-height: 1;
          display: block;
          font-weight: normal;
          text-transform: uppercase;
          user-select: none;
        }
      `}</style>
      <style jsx>{`
        .tab-menu {
          transform: ${isOpen ? "translateX(0)" : "translateX(100%)"};
          z-index: ${isOpen ? 1 : 0};
        }
        .menu-text-toggle {
          opacity: ${isFullscreen ? 0.6 : ""};
          opacity: ${isOtherOpen ? 0 : ""};
        }
      `}</style>
    </>
  );
};

export default Tabs;