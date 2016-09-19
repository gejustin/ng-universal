var path = require('path');

var ROOT_DIR = path.resolve(__dirname, '../');
var SOURCE_DIR = path.resolve(ROOT_DIR, './src');
var SERVER_DIR = path.resolve(SOURCE_DIR, './server');
var BUILD_DIR = path.resolve(ROOT_DIR, './dist');
var PUBLIC_DIR = path.resolve(BUILD_DIR, './site');
var NODE_DIR = path.resolve(ROOT_DIR, './node_modules');

var HOST = process.env.HOST || 'localhost';
var PORT = +process.env.PORT || 3000;
var PROTOCOL = process.env.PROTOCOL || 'http';
var isProduction = /^prod$|^production$/.test(process.env.NODE_ENV);

module.exports = {
    ROOT_DIR: ROOT_DIR,
    SOURCE_DIR: SOURCE_DIR,
    SERVER_DIR: SERVER_DIR,
    BUILD_DIR: BUILD_DIR,
    PUBLIC_DIR: PUBLIC_DIR,
    NODE_DIR: NODE_DIR,
    HOST: HOST,
    PORT: PORT,
    PROTOCOL: PROTOCOL,
    isProduction: isProduction
};
