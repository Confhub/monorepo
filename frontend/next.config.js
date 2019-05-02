const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
    ? require('next/constants')
    : require('next-server/constants');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {};
  }

  const withCss = require('@zeit/next-css');
  const path = require('path');
  const Dotenv = require('dotenv-webpack');

  return withCss({
    target: 'serverless',
    webpack: (config, options) => {
      // enable file imports relative to the app root
      config.resolve.modules.push(path.resolve('./'));

      return config;
    },
  });
};
