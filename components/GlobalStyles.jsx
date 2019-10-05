import React from 'react';

let GlobalStyles = () => (
  <style jsx global>{`
    * {
      box-sizing: border-box;
    }

    html,
    body,
    #mapid,
    #__next {
      height: 100%;
      width: 100vw;
    }
    #__next {
      position: relative;
      overflow: hidden;
    }
    #mapid {
      z-index: 0;
    }
    body {
      font-family: DFDS, Verdana, sans-serif;
      padding: 0;
      margin: 0;
      color: $color-textGrey;
      background-color: white;
    }
    @media (min-width: 700px) {
    }
    #__next {
      position: relative;
    }

    button {
      border: none;
      box-shadow: none;
      background: transparent;
    }

    a {
      text-decoration: none;
      color: #1b5786;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    p {
      line-height: 1.5;
    }

    .svg-ship-icon {
      &--highlight {
      }
    }

    .leaflet-control.leaflet-control-zoom {
      _border: none;
    }

    .leaflet-control-zoom-in {
      background-color: rgba(255, 255, 255, 0.9) !important;
      @supports (backdrop-filter: blur(4px)) {
        background-color: rgba(255, 255, 255, 0.7) !important;
        backdrop-filter: saturate(180%) blur(4px);
      }
    }

    .leaflet-control-zoom-out {
      background-color: rgba(255, 255, 255, 0.9) !important;
      @supports (backdrop-filter: blur(4px)) {
        background-color: rgba(255, 255, 255, 0.7) !important;
        backdrop-filter: saturate(180%) blur(4px);
      }
    }
  `}</style>
);

export default GlobalStyles;
