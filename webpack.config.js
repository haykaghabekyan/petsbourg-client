const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "css/style.css"
});

const copyImages = new CopyWebpackPlugin([{
    from: __dirname + '/markups/index.html',
    to: __dirname + '/dist/index.html'
}], {
    copyUnmodified: true
});

const browserConfigs = {
    entry: __dirname + "/scripts/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react", "babel-preset-stage-3", "babel-preset-stage-2"],
                    plugins: []
                }
            }]
        }, {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
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
        copyImages
    ],
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
    devServer: {
        contentBase: "./dist",
        // this will allow routes work
        historyApiFallback: true
    },
};

module.exports = [browserConfigs];