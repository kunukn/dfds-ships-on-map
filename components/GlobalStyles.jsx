import React from "react";

let Styles = () => (
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

  `}</style>
);

export default Styles;
