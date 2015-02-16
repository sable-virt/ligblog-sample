module.exports = {
    entry: './app.js',
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html-loader' },
            { test: /\.css$/, loaders: ['style-loader','css-loader'] },
        ]
    },
};