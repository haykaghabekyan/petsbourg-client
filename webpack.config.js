const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "styles/[name].css"
});

const copyImages = new CopyWebpackPlugin([{
    from: path.join(__dirname, "/src/browser/media"),
    to: path.join(__dirname, "dist/browser/media"),
}], {
    copyUnmodified: true,
});

const config = {
    entry: path.join(__dirname, "/src/browser/scripts/index.js"),
    output: {
        path: path.join(__dirname, "/dist/browser"),
        filename: "scripts/bundle.js"
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react", "stage-0"],
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
        }, {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [{
                loader: "file-loader",
                options: {
                    outputPath: "media/images/",
                    name: "[name].[ext]"
                },
            }]
        }, {
            test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
            use: [{
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts/',
                    name: "[name].[ext]"
                },
            }],
        }]
    },
    plugins: [
        extractSass,
        copyImages,
    ],
};

module.exports = config;
