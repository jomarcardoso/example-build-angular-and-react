const path = require("path");
const nodeExternals = require("webpack-node-externals");
// const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CONFIG_BY_TYPE = {
  libraryTarget: {
    commonjs: "commonjs",
    module: "module",
  },
  filename: {
    commonjs: "index.cjs",
    module: "index.mjs",
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
        // allowlist: [/^lodash/],
      }),
    ],
  },
};

const generateConfig = ({ type }) => {
  const config = {
    entry: path.resolve(__dirname, "./src/index.ts"),
    mode: "production",
    devtool: "source-map",
    output: {
      filename: CONFIG_BY_TYPE.filename[type],
      path: path.resolve(__dirname, "../../dist/utils"),
      libraryTarget: CONFIG_BY_TYPE.libraryTarget[type],
      globalObject: "this",
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
                configFile: path.resolve(__dirname, "tsconfig.lib.prod.json"),
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
        //   test: /\.module.scss$/i,
        //   use: [MiniCssExtractPlugin.loader, "css-loader"],
        // },
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
    externalsPresets: { node: true },
    externals: CONFIG_BY_TYPE.externals[type],
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      // alias: {
      //   "@lib/utils": path.relative(__dirname, "src/projects/utils"),
      // },
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all',
    //   },
    // },
    plugins: [],
    // plugins: [new MiniCssExtractPlugin()],
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
