const withCss = require('@zeit/next-css');
const path = require('path');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = file => {};
}

const nextConfig = {
  target: 'serverless',
  webpack: (config, options) => {
    // enable file imports relative to the app root
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
};

module.exports = withCss(nextConfig);
