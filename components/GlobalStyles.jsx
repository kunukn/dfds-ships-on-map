import React from "react";

let GlobalStyles = () => (
  <style jsx global>{`
    * {
      box-sizing: border-box;
    }

    body {
      font-family: DFDS, Verdana, sans-serif;
      margin: 0;
      color: #4d4e4c;
      background-color: #eef0f1;
    }
    @media (min-width: 700px) {
      body {
        padding: 20px 0;
      }
    }
    #__next {
      margin: 0 auto;
      max-width: 700px;
      background-color: white;
      padding: 20px;
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

export default GlobalStyles;
