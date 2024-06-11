const path = require("path");
const nodeExternals = require("webpack-node-externals");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CONFIG_BY_TYPE = {
  libraryTarget: {
    commonjs: "commonjs",
    module: "module",
  },
  globalObject: {
    commonjs: "this",
    module: "this",
  },
  filename: {
    commonjs: "index.cjs",
    module: "index.mjs",
  },
  externalsPresets: {
    commonjs: { node: true },
    module: { node: true },
  },
  outputModule: {
    commonjs: false,
    module: true,
  },
  externals: {
    commonjs: [
      nodeExternals({
        importType: "commonjs",
      }),
    ],
    module: [
      nodeExternals({
        importType: "module",
        allowlist: [/^lodash/],
      }),
    ],
  },
  library: {
    commonjs: undefined,
    module: undefined,
  },
  entry: {
    commonjs: "./src/index.ts",
    module: "./src/index.ts",
  },
  configFile: {
    commonjs: "tsconfig.json",
    module: "tsconfig.json",
  },
};

const generateConfig = ({ type }) => {
  const config = {
    entry: path.resolve(__dirname, "./projects/react/src/index.ts"),
    mode: "production",
    devtool: "source-map",
    output: {
      filename: CONFIG_BY_TYPE.filename[type],
      path: path.resolve(__dirname, "./dist/react"),
      libraryTarget: CONFIG_BY_TYPE.libraryTarget[type],
      library: CONFIG_BY_TYPE.library[type],
      globalObject: CONFIG_BY_TYPE.globalObject[type],
    },
    experiments: {
      outputModule: CONFIG_BY_TYPE.outputModule[type],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: "ts-loader",
              options: {
                configFile: CONFIG_BY_TYPE.configFile[type],
              },
            },
          ],
          exclude: /node_modules/,
        },
        {
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
        },
        // {
        //   test: /\.scss$/i,
        //   use: [
        //     "style-loader",
        //     // MiniCssExtractPlugin.loader,
        //     // Translates CSS into CommonJS
        //     "css-loader",
        //     // Compiles Sass to CSS
        //     "sass-loader",
        //   ],
        // },
        // {
        //   test: /\.scss$/i,
        //   use: [
        //     MiniCssExtractPlugin.loader,
        //     // Translates CSS into CommonJS
        //     'css-loader',
        //     // Compiles Sass to CSS
        //     'sass-loader',
        //   ],
        // },
      ],
    },
    externalsPresets: CONFIG_BY_TYPE.externalsPresets[type],
    externals: CONFIG_BY_TYPE.externals[type],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    // plugins: [new MiniCssExtractPlugin()],
    plugins: [],
  };

  // if (mode === "development") {
  //   config.plugins.push(new ForkTsCheckerWebpackPlugin());
  // } else {
  // new CleanWebpackPlugin({
  //   dry: true,
  // }),
  // }

  console.log(config);

  return config;
};

module.exports = ({ type = "module" }) => {
  return generateConfig({ type });
};
