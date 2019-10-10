import { useStore } from 'laco-react';

import store from '~/store.js';
import CloseSvg from '~/public/static/icons/Close.svg';

const TabMenu = ({ children }) => {
  return (
    <>
      <div className="tab-menu">{children}</div>

      <style jsx>{`
        .tab-menu {
        }
      `}</style>
    </>
  );
};

export default TabMenu;
