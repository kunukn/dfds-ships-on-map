import React from "react";

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

    .ship-div-marker-icon {
      _width: 100px;
      _height: 100px;
      pointer-events: none;
      _border-radius: 50%;
      _background: rgba(red, 0.5);
      _transform: translate(-50%, -50%);
    }
    .ship-div-marker-icon__name {
      transform: translateY(10px);
      line-height: 1;
      font-size: 10px;
      color: $color-groupBlue;
      font-weight: 300;
      font-family: Verdana;
      position: absolute;
      top: 0;
      left: calc(50% - 50px);
      width: 100%;
      text-align: center;
      width: 100px;
    }
  `}</style>
);

export default GlobalStyles;
