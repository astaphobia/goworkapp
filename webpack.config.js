const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
        process.cwd() + '/src/index.js'
    ],
    output: {
        path: process.cwd() + '/public',
        publicPath: '/',
        filename: 'main.js'
    },
    target: 'web',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css'],
        alias: {
            '@': process.cwd() + '/src'
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.html$/,
                use: {
                    loader: "html-loader"
                }
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '/img/[name].[ext]'
                    }
                }
            },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
}