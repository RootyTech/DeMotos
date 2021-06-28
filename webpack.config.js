'use strict';

const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
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
                test: /\.css|.scss$/,
                use: [
                    MiniCSSExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js'],
    },
    plugins: [
        new MiniCSSExtractPlugin({
            filename: 'styles/[name].[contenthash].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src', 'index.pug'),
            filename: 'index.html',
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src/pages', 'AgendarCita.pug'),
            filename: 'AgendarCita.html',
            inject: true,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: path.resolve('src/pages', 'QuienesSomos.pug'),
            filename: 'QuienesSomos.html',
            inject: true,
            minify: false
        }),
        new CleanWebpackPlugin()
    ]
};