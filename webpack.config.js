module.exports = {
    entry: "./public/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js",
        publicPath: "/"
    },
    resolve: {
        extensions: ['.js', '.marko']
    },
    devtool: "cheap-module-eval-source-map",
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        poll: 1000
    },
    module: {
        rules: [
           { test: /\.js$/, loader:"babel-loader", exclude: /node_modules/ },
           { test: /\.marko/, loader:"marko-loader", exclude: /node_modules/ },
           { test: /\.less$/, loader: "css-loader!less-loader!", exclude: /node_modules/}
        ],
    }
}