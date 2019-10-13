import { useStore, Subscribe } from 'laco-react';
import cx from 'clsx';

import store from '~/store.js';
import { StaticStyles, DynamicStyles } from './MainHeader.styles';
import LeftSidebar from '~/components/left-sidebar/LeftSideBar';
import MainHeaderButtonsGroup from './MainHeaderButtonsGroup';
import OptionsOverlay from './OptionsOverlay';

const MainHeader = ({ ships = [], terminals = [] }) => {
  return (
    <>
      <LeftSidebar ships={ships} terminals={terminals} />
      <MainHeaderButtonsGroup />
      <OptionsOverlay />

      <style jsx>{``}</style>
    </>
  );
};

export default MainHeader;
