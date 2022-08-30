const {webpack} = require("react-app-rewired/config-overrides");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = function override (config, env) {
    let loaders = config.resolve

    const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

    config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

    loaders.fallback = {
        "fs": false,
        "tls": false,
        "net": false,
        "http": require.resolve("stream-http"),
        "https": false,
        "child_process": false,
        "constants": require.resolve("constants-browserify"),
        "os": require.resolve("os-browserify/browser"),
        "zlib": require.resolve("browserify-zlib") ,
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify"),
        "util": require.resolve("util/"),
        "crypto": require.resolve("crypto-browserify"),
        "ws": require.resolve("ws"),
        "process": require.resolve("process/browser"),
    }

    return config
}