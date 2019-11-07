// TODO: refactor. there is only one right tab item.

import { useStore } from 'laco-react';

import store from '~/store.js';
import CloseSvg from '~/public/icons/Close.svg';

const TabMenu = ({ children, title, isOpen, onToggle, level = 0 }) => {
  const { isFullscreen } = useStore(store);

  // TODO: delete this
  let getFallbackTitle = () => (
    <>
      {'tab'.split('').map((c, index) => (
        <b key={index}>{c}</b>
      ))}
      <b>{level + 1}</b>
    </>
  );

  let titleToRender = title
    ? title.split('').map((c, index) => <b key={index}>{c}</b>)
    : getFallbackTitle();

  return (
    <>
      <div className="tab-menu">
        <div className="tab-menu-content">
          <div className="tab-menu-content-children">{children}</div>
          <button
            className="tab-menu-close-button"
            onClick={onToggle}
            aria-label="close"
          >
            <CloseSvg />
          </button>
        </div>
        <button
          className="menu-text-toggle"
          onClick={onToggle}
          aria-label="logs"
          title="logs"
        >
          <span className="menu-text-toggle-content">{titleToRender}</span>
        </button>
      </div>

      <style jsx>{`
        .tab-menu {
          width: 200px;
          height: calc(100vh - 80px);
          max-height: calc(100vh - 100px);
          position: absolute;
          top: 80px;
          right: 0;
          transition: transform 300ms;
          transform: translateX(100%);
        }
        .tab-menu-content {
          overflow: auto;
          position: absolute;
          max-height: inherit;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          padding: 40px 10px 10px;
          background: rgba(white, 0.5);
          @supports (backdrop-filter: blur(10px)) {
            background-color: rgba(255, 255, 255, 0.2);
            backdrop-filter: saturate(180%) blur(4px);
          }
        }
        .tab-menu-content-children {
          max-height: inherit;
        }
        .tab-menu-close-button {
          position: fixed;
          top: 4px;
          right: 20px;
          font-size: 16px;
          padding: 4px;
          background: transparent;
          border: none;
          box-shadow: none;
          line-height: 1;
          color: $color-groupBlue;

          > :global(svg) {
            display: block;
          }
        }

        .menu-text-toggle-content {
          border-top-left-radius: 1.5em;
          border-bottom-left-radius: 1.5em;
          background: rgba(white, 0.5);
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 1.5em;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          @supports (backdrop-filter: blur(4px)) {
            background-color: rgba(255, 255, 255, 0.7);
            backdrop-filter: saturate(180%) blur(4px);
          }
        }
        .menu-text-toggle {
          font-size: 16px;
          border: none;
          box-shadow: none;
          position: absolute;
          left: -2em;
          width: 2em;
          height: 90px;
          top: ${20 + level * 90 + level * 10}px;
          transition: opacity 300ms, background-color 300ms;
          z-index: 2;
          user-select: none;
          padding-left: 0.5em;
          background: transparent;
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
        }
      `}</style>
    </>
  );
};

export default TabMenu;
