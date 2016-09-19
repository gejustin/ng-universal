var webpack = require('webpack');
var path = require('path');

var environment = require('./environment');

var COMMON_CONFIG = {
    plugins: [
    ],
    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loaders: ['tslint-loader']
            }
        ],
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader']
            },
            {
                test: /\.html$/,
                loaders: ['html-loader']
            }
        ]
    },
    context: environment.ROOT_DIR,
    resolve: {
        root: [environment.ROOT_DIR],
        extensions: ['', '.ts', '.js'],
        modulesDirectories: [environment.BOWER_DIR, environment.NODE_DIR, environment.ROOT_DIR],
    }
};

module.exports = COMMON_CONFIG;
