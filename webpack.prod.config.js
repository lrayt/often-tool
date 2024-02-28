'use strict';
const path = require('path')

module.exports = {
    mode: "production",
    entry: "./index.js",
    output: {
        filename: "[name].js",
        // path: path.join(__dirname, 'dist'),
        library: "OftenTool",
        libraryExport: "default",
        // libraryTarget: "umd"
    }
};