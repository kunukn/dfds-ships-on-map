import { useStore, Subscribe } from 'laco-react';
import cx from 'clsx';

import store from '~/store.js';
import CloseIcon from '~/public/static/icons/Close.svg';

const onOptionsClose = () => store.set(state => ({ isOptionsOpen: false }));

const OptionsOverlay = () => {
  const { isOptionsOpen } = useStore(store);

  return (
    <>
      <div
        className="options-overlay"
        style={{
          transform: isOptionsOpen ? 'translateY(0)' : 'translateY(-100%)',
        }}
      >
        <div className="options-overlay-header">
          <button
            aria-label="close"
            className="button-options-overlay-close"
            onClick={onOptionsClose}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="options-overlay-content">menu overlay</div>
      </div>

      <style jsx>{`
        .options-overlay {
          position: absolute;
          top: 0;
          right: 0;
          transform: translateY(-100%);
          transition: transform 260ms;
          background: white;
          min-height: 200px;
          min-width: 200px;
          z-index: 1;
        }
        .options-overlay-header {
          display: flex;
          padding: 10px;
          background: #eee;
        }
      `}</style>
    </>
  );
};

export default OptionsOverlay;
