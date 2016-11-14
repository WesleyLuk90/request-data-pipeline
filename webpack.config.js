const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

function getArgString() {
    return process.argv.join(' ');
}

function argStringContains(text) {
    return getArgString().indexOf(text) > -1;
}

function isTest() {
    return argStringContains('test');
}

function isDev() {
    return isTest() || argStringContains('dev') || argStringContains('watch') || argStringContains('progress');
}
const plugins = [
    new ExtractTextPlugin('styles.css'),
];
if (isDev() && !isTest()) {
    plugins.push(new LiveReloadPlugin({ appendScriptTag: true }));
} else if (!isDev()) {
    plugins.push(new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: JSON.stringify('production'),
        },
    }));
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        minimize: true,
        mangle: false,
    }));
}

module.exports = {
    progress: isDev(),
    colors: isDev(),
    devtool: isDev() ? 'eval-cheap-module-source-map' : undefined,
    entry: './src/web/main.js',
    output: {
        path: 'public/bundle',
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel',
            query: {
                presets: [
                    'es2015',
                    'react',
                ],
            },
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader'),
        }, {
            test: /\.css/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        }, {
            test: /\.png$/,
            loader: 'url-loader?limit=100000',
        }, {
            test: /\.jpg$/,
            loader: 'file-loader',
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/font-woff',
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=application/octet-stream',
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file',
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&mimetype=image/svg+xml',
        }],
    },
    htmlLoader: {
        attrs: false,
    },
    plugins,
};
