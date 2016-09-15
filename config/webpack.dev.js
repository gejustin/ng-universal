var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var path = require('path');
var environment = require('./environment');

var COMMON_CONFIG = require('./webpack.common');

var SERVER_CONFIG = {
    target: 'node',
    entry: path.join(environment.SERVER_DIR, 'main'),
    name: 'server',
    output: {
        path: environment.BUILD_DIR,
        filename: 'server.js',
        devtoolModuleFilenameTemplate: function (info) {
            if (info.absoluteResourcePath.charAt(0) === '/') {
                return 'file://' + info.absoluteResourcePath;
            } else {
                return 'file:///' + info.absoluteResourcePath;
            }
        },
        devtoolFallbackModuleFilenameTemplate: function (info) {
            if (info.absoluteResourcePath.charAt(0) === '/') {
                return 'file://' + info.absoluteResourcePath + '?' + info.hash;
            } else {
                return 'file:///' + info.absoluteResourcePath + '?' + info.hash;
            }
        }
    },
    externals: checkNodeImport,
    node: {
        global: true,
        __dirname: true,
        __filename: true,
        process: true,
        Buffer: true
    }
};

module.exports = [
    webpackMerge({}, COMMON_CONFIG, SERVER_CONFIG)
];

function checkNodeImport(context, request, callback) {
    if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
        callback(null, 'commonjs ' + request); return;
    }
    callback();
}
