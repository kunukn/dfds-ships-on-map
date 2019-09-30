import { useStore } from 'laco-react';
import store from '~/store.js';

const TabMenu = ({ children, title, isOpen, onToggle, isOtherOpen, level }) => {
  const { isFullscreen } = useStore(store);

  return (
    <>
      <div className="tab-menu">
        <div className="tab-menu-content">
          <div className="tab-menu-content-children">{children}</div>
          <button className="tab-menu-close-button" onClick={onToggle}>
            close
          </button>
        </div>
        <button
          className="menu-text-toggle"
          onClick={onToggle}
          aria-label="tab1"
        >
          <b>t</b>
          <b>a</b>
          <b>b</b>
          <b>{level + 1}</b>
        </button>
      </div>

      <style jsx>{`
        .tab-menu {
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
        }
        .tab-menu-close-button {
          position: absolute;
          top: 4px;
          right: 4px;
          font-size: 16px;
          padding: 4px 8px;
          background: transparent;
          background: rgba(#4d4e4c, 0.5);
          color: white;
          border: 1px solid white;
          box-shadow: none;
          min-height: 30px;
          border-radius: 30px;
          line-height: 1;
          min-width: 4em;
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
          transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
          z-index: ${isOpen ? 1 : 0};
        }
        .menu-text-toggle {
          opacity: ${isFullscreen ? 0.6 : ''};
          opacity: ${isOtherOpen ? 0 : ''};
        }
      `}</style>
    </>
  );
};

export default TabMenu;
