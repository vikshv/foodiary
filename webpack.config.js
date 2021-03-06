'use strict';

var path = require ('path');
var webpack = require ('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.join(__dirname, '/'),

    entry: {
        foodiary: './source/index.js',
        tests: './tests/index.js'
    },

    output: {
        path: path.join(__dirname, 'public'),
        publicPath: '/public/',
        filename: '[name].js'
    },
    
    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: 'source-map',

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            LANG: JSON.stringify('ru')
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new ExtractTextPlugin('foodiary.css')
    ],

    resolve: {
        root: __dirname,
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js'],
        alias: {
            core: 'source/core',
            common: 'source/common'
        }
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract('css?sourceMap')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap')
            }, 
            {
                test: /\.html/, 
                loader: 'html'
            }
        ]
    },

    noParse: [
        /\/node_modules\/(bootstrap|jquery|font-awesome)/
    ]
};

