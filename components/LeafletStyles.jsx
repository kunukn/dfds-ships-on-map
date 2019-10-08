import React from "react";

let Styles = () => (
  <style jsx global>{`
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
    .ship-div-marker-icon__direction {
      position: absolute;
      text-align: center;
      font-size: 16px;
      top: -42px;
      width: 1em;
      height: 1em;
      line-height: 1;
      left: 0;
      color: $color-groupBlue;
      _background: rgba(white, 0.2);
      border-radius: 50%;
      _display: flex;
      justify-content: center;
      align-items: center;
    }
  `}</style>
);

export default Styles;
