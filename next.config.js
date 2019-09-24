const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase, { defaultConfig }) => {
  return {
    target: "serverless",
    env: {
      // Public token, not a secret
      mapBoxToken:
        "pk.eyJ1Ijoia3VudWtuIiwiYSI6ImNrMHh2ZWFqazA0NWIzbXA0MnZxZXUxNmgifQ.M1ilooWxj_UOk41ZoAXTtg"
    },
    webpack: (config, options) => {
      return config;
    }
  };
};
