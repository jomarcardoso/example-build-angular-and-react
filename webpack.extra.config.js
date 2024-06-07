const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = (config, options) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(pkg.version),
    }),
  );

  console.log(config.module.rules);

  return config;
};
