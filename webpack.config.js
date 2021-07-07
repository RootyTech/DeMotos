'use strict';

const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.pug/,
                use: ["html-loader", "pug-html-loader"]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader'}
            },
            {
                test: /\.css|.sass$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.png|.svg$/,
                include: [
                    path.resolve(__dirname, "src/assets/Backgrounds"),
                    path.resolve(__dirname, "src/assets/Brands")
                ],
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      name: "styles/[name].[ext]",
                    },
                  },
                ]
            }
        ],
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'styles/styles.css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.pug'),
            filename: 'index.html',
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'AgendarCita.pug'),
            filename: 'AgendarCita.html',
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'QuienesSomos.pug'),
            filename: 'QuienesSomos.html',
            inject: true,
            minify: false
        })
    ]
};