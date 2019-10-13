import { useStore, Subscribe } from 'laco-react';
import cx from 'clsx';

import store from '~/store.js';
import { StaticStyles, DynamicStyles } from './MainHeader.styles';
import LeftSidebar from '~/components/left-sidebar/LeftSidebar';
import MainHeaderButtonsGroup from './MainHeaderButtonsGroup';
import SettingsOverlay from './SettingsOverlay';

const MainHeader = ({ ships = [], terminals = [] }) => {
  return (
    <>
      <LeftSidebar ships={ships} terminals={terminals} />
      <MainHeaderButtonsGroup />
      <SettingsOverlay />

      <style jsx>{``}</style>
    </>
  );
};

export default MainHeader;
