import LeftSidebar from '~/components/left-sidebar/LeftSidebar'
import MainHeaderButtonsGroup from './MainHeaderButtonsGroup'
import SettingsOverlay from './SettingsOverlay'

const MainHeader = ({ ships = [], terminals = [] }) => {
  return (
    <>
      <LeftSidebar ships={ships} terminals={terminals} />
      <MainHeaderButtonsGroup />
      <SettingsOverlay />
    </>
  )
}

export default MainHeader
