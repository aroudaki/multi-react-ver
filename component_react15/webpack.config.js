'use strict';
const debug = process.env.NODE_ENV !== "production";

module.exports = function (webpackEnv) {
    return{
        context: __dirname,
        entry: "./src/component.jsx",
        output: {
          path: __dirname + "/dist",
          filename: "bundle.js",
          library: 'ComponentR15',
          libraryTarget: 'window'
        },
        externals:{
          // base on the control manifest we need to choose the right react version
          'react': 'React15',
          'office-ui-fabric-react': 'Fabric5'
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