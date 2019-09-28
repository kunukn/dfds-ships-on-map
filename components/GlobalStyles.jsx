import React from 'react';

let GlobalStyles = () => (
  <style jsx global>{`
    * {
      box-sizing: border-box;
    }

    body {
      font-family: DFDS, Verdana, sans-serif;
      margin: 0;
      color: #4d4e4c;
      background-color: white;
      min-height: 100vh;
    }
    @media (min-width: 700px) {
      body {
      }
    }
    #__next {
      min-height: 100vh;
      position: relative;
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
  `}</style>
);

export default GlobalStyles;
