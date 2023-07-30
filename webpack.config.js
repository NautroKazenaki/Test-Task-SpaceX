const path = require('path');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(svg)(\?[a-z0-9=.]+)?$/,
                loader: 'file-loader'
            }
        ],

    },
    mode: 'development',
    devServer: {

        static: {
            directory: path.join(__dirname, '/')
        },
        devMiddleware: {
            publicPath: '/'
        },
        port: 3000,

    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
}
