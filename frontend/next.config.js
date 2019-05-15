const withCss = require('@zeit/next-css');
const path = require('path');
const Dotenv = require('dotenv-webpack');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

module.exports = withCss({
  target: 'serverless',
  webpack: (config, options) => {
    // enable file imports relative to the app root
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
});
