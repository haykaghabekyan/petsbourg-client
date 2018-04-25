const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css"
});

const config = {
    mode: "development",
    entry: path.join(__dirname, "/src/scripts/browser/index.js"),
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "js/bundle.js"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react", "stage-2", "stage-3"],
                    plugins: []
                }
            }]
        }, {
            test: /\.scss$/,
            use: extractSass.extract([{
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }])
        }]
    },
    plugins: [
        extractSass,
    ],
};

module.exports = config;