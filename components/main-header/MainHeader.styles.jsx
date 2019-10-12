import React from 'react'

export let StaticStyles = () => (
  <style jsx>{`
    .main-header {
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      _max-width: 1300px;
      font-size: 14px;
      color: #002b45;
      text-align: left;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      pointer-events: none;
    }

    .button-group {
      pointer-events: all;
      height: inherit;
      display: flex;
    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      margin: 5px;
      color: $color-groupBlue;
      cursor: pointer;
      font-size: 20px;
      border-radius: 50%;
      background: rgba(white, 0.5);
      @supports (backdrop-filter: blur(10px)) {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: saturate(180%) blur(4px);
      }
      > :global(svg) {
        _outline: 1px solid red;
      }
    }
    .toggle-full-screen {
      font-size: 30px;
      border: none;
      fill: $color-groupBlue;
    }
    .left-sidebar {
      pointer-events: all;
      position: relative;
      height: calc(100vh - 150px);
      max-height: calc(100vh - 150px);
      width: 200px;
      position: absolute;
      top: 5px;
      left: 0;
      background: rgba(white, 0.5);
      @supports (backdrop-filter: blur(10px)) {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: saturate(180%) blur(4px);
      }
      transition: transform 300ms;
    }
    .button-sidebar-content {
      background: rgba(white, 0.5);
      @supports (backdrop-filter: blur(10px)) {
        background-color: rgba(255, 255, 255, 0.5);
        backdrop-filter: saturate(180%) blur(4px);
      }
      height: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button-sidebar {
      position: absolute;
      right: -30px;
      width: 30px;
      top: 0;
      padding: 0;
      padding-right: 10px;
      color: $color-groupBlue;
      display: flex;
      justify: center;
      align-items: center;
      height: 50px;
      font-size: 20px;
    }
    .sidebar-content {
      position: absolute;
      top: 50px;
      left: 0;
      padding: 0 10px 10px;
      overflow: auto;
      height: calc(100% - 50px);
      width: 100%;
    }
    .left-sidebar-headline {
      position: absolute;
      top: 0;
      left: 0;
      padding: 14px;
      width: 100%;
      height: 50px;
      line-height: 1;
      font-size: 20px;
    }
    :global(.fullscreen-exit-icon) {
      display: block;
    }
    :global(.fullscreen-enter-icon) {
      display: block;
    }
    .ship-search-headline {
      font-size: 20px;
      padding: 4px;
    }
    .ship-search-item {
      margin-bottom: 10px;
      > button {
        font-size: inherit;
        cursor: pointer;
        padding: 4px;
        display: block;
        width: 100%;
        background: white;
        text-align: left;
      }
    }
  `}</style>
);

export let DynamicStyles = ({ isFullscreen, leftSidebarToggle }) => (
  <style jsx>{`
    .logo {
      _opacity: ${isFullscreen ? 0.7 : ''};
    }
    .toggle-full-screen {
      _opacity: ${isFullscreen ? 0.7 : ''};
    }
    .left-sidebar {
      transform: ${leftSidebarToggle ? 'translateX(0)' : 'translateX(-100%)'};
    }
    .button-sidebar-content {
      transform: ${leftSidebarToggle ? 'rotate(.5turn)' : 'rotate(0)'};
    }
  `}</style>
);
