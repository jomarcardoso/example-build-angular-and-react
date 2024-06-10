# example-build-angular-and-react

An example of an Angular application with some parts in React and also three libs to publish on NPM.

## The simpliest build

React and Angular are only JavaScript or TypeScript in case of Angular with decorators. Both Babel and TypeScript can transpile JSX and the decorator to a fully compatible JavaScript for browsers.

To configure you only need to create the `webpack.config.js`, `tsconfig.json` and install the dependencies.

This build has some limitations and change some aspects how to work in Angular.

- can not separate the component template in `.html` files
- can not use `styleUrl` to import and encpsulate the CSS

```js
/* webpack.config.js */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // Add other rules as necessary
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 4200,
    open: true,
  },
};
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "outDir": "./dist/",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "target": "ES2022",
    "lib": ["ES2022", "dom"]
  }
}
```

Further you can improve this build, but I am going to stop here to show you another.

## Generate the complete build

- `npm run ng generate library angular`

## References

- [uday menon - Building an Angular Application from Scratch without the CLI](https://medium.com/@udayvmenon/building-an-angular-application-from-scratch-without-the-cli-0e5e17b09d11)
- [JeB Barabanov - Customizing Angular CLI build — an alternative to ng eject (v2)
  ](https://medium.com/angular-in-depth/customizing-angular-cli-build-an-alternative-to-ng-eject-v2-c655768b48cc)
- [Chris Coyier - How to Animate the Details Element
  ](https://css-tricks.com/how-to-animate-the-details-element/)
