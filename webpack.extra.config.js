const webpack = require("webpack");
const pkg = require("./package.json");

module.exports = (config, options) => {
  config.plugins.push(
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(pkg.version),
    })
  );

  const indexScssRule = config.module.rules.findIndex(
    (a) => String(a.test) === String(/\.(?:scss)$/i)
  );
  const scssRule = config.module.rules[indexScssRule];

  const scssModuleRule = {
    test: /\.module\.scss$/i,
    use: [
      {
        loader: "style-loader",
      },
      {
        loader: "css-loader",
        options: {
          importLoaders: 1,
          modules: {
            mode: "local",
          },
        },
      },
      {
        loader: "sass-loader",
      },
    ],
  };

  config.module.rules[indexScssRule] = {
    ...scssRule,
    exclude: /\.module\.scss$/i,
  };
  config.module.rules.splice(indexScssRule + 1, 0, scssModuleRule);

  return config;
};
