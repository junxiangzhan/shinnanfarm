const path = require("path");

module.exports = {
    target: "node",
    entry: "./src/client/index.js",
    mode: process.env.NODE_ENV ?? "development",
    devtool: "source-map",

    output: {
        filename: "bundle.js",
        path: path.resolve( __dirname, "public" )
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    }
}