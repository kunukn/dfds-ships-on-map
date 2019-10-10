import React, { useEffect, useState, useRef } from 'react';
import { useStore } from 'laco-react';

import TabMenu from './TabMenu';
import store from '~/store.js';
import CloseSvg from '~/public/static/icons/Close.svg';
import SearchIcon from '~/public/static/icons/Search.svg';

const TabMenuLayer = () => {
  const { isFullscreen } = useStore(store);
  let [tabs, setTabs] = useState({
    values: [false, false, false, false],
  });

  let isOtherTabMenuOpen = index =>
    tabs.values.some((tab, i) => {
      if (index === i) return false;
      return !!tab;
    });

  let onTabsToggle = index => {
    setTabs(state => {
      let current = state.values[index];
      state.values = state.values.map(tab => false);
      if (!current) {
        state.values[index] = true;
      }
      return { ...state };
    });
  };

  return (
    <>
      <div className="tab-menu-layer">
        <div className="tab-menu-root-item">
          <button className="button-root-item">
            <SearchIcon />
          </button>
        </div>

        <div className="tab-menu-group">
          <TabMenu>left 1</TabMenu>
          <TabMenu>left 2</TabMenu>
        </div>
      </div>
      <style jsx>{`
        .tab-menu-layer {
          position: absolute;
          left: 0;
          top: 60px;
          width: 50px;
          height: 200px;
          outline: 1px solid;
        }
        .button-root-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          color: #002b45;
          cursor: pointer;
          font-size: 20px;
          background: red;
          height: 50px;
        }
      `}</style>
    </>
  );
};
export default TabMenuLayer;
