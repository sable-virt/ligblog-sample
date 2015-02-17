var webpack = require('webpack');
module.exports = {
    entry: {
        app: './app.js',
        index: './index.js',
        detail: './detail.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('app','app.js')
    ]
};