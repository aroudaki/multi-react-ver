'use strict';
const debug = process.env.NODE_ENV !== "production";

module.exports = function (webpackEnv) {
    return{
        context: __dirname,
        entry: "./src/index.js",
        output: {
          path: __dirname + "/dist",
          filename: "bundle.js",
          library: 'react12_wrapper',
          libraryTarget: 'window'
        },
        resolve: {
            modules:['node_modules']
        },
        module: {
            rules: [
              {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                  loader: 'babel-loader'
                }
              }
            ]
        },
        optimization: {
          minimize: false
      },
    }
}