const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = function ( env ) {

    const configs = {
        client: {
            entry: "./src/client/index.js",
            output: {
                filename: "bundle.js",
                path: path.resolve(__dirname, "public")
            }
        },

        server: {
            entry: "./src/index.js",
            externals: [ webpackNodeExternals() ],
            output: {
                filename: "bundle.js",
                path: path.resolve( __dirname, "build" )
            }
        }
    };

    return {
        target: "node",
        mode: process.env.NODE_ENV ?? "development",
        devtool: "source-map",

        module: {
            rules: [{
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }]
        },

        ...configs[ env.mode ]
    };
}