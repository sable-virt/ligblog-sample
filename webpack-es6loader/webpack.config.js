var webpack = require('webpack');
module.exports = {
    output: {
        filename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'es6-loader' },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
};