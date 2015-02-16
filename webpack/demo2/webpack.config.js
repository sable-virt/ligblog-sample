module.exports = {
    entry: {
        app: './app.js',
        app2: './app2.js'
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js"
    }
};