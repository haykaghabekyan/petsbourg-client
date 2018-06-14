const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const extractSass = new ExtractTextPlugin({
//     filename: "styles/[name].css"
// });

const compileScss = new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: "styles/[name].css",
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
            test: /\.(sa|sc|c)ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ],
        }, {
            test: /\.(jpg|png|gif|svg|pdf|ico)$/,
            use: [{
                loader: "file-loader",
                options: {
                    outputPath: "media/images/",
                    name: "[name].[ext]",
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
        copyImages,
        compileScss,
    ],
};

module.exports = config;
