const path = require("path");
const glob = require("glob");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].css"
});

function getEntries(pattern) {
    const entries = {};

    glob.sync(pattern).forEach(file => {
        entries[file.replace("src/", "")] = path.join(__dirname, file);
    });

    return entries;
}

// getEntries("/src/scripts/server/**/*.js").concat(getEntries("/src/scripts/universal/**/*.js")),

const config = {
    mode: "development",
    entry: Object.assign({}, getEntries("src/scripts/server/**/*.js"), getEntries("src/scripts/universal/**/*.js")),
    target: "node",
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    output: {
        path: path.join(__dirname, "/dist"),
        filename: '[name]',
        libraryTarget: "commonjs2",
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
                    name: "[name].[ext]",
                    emitFile: false,
                },
            },]
        },]
    },
    plugins: [
        extractSass,
    ],
};

module.exports = config;