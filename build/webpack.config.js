var path = require('path');
var webpack = require('webpack');
var GitRevisionPlugin = require('git-revision-webpack-plugin');
var gitRevisionPlugin = new GitRevisionPlugin();
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

function resolve(dir) {
    return path.join(__dirname, '../', dir)
}

function src(dir) {
    return resolve(path.join('src', dir))
}

var theme = require(resolve('package.json')).theme;
var isDev = (process.env.NODE_ENV || "").indexOf('dev') !== -1;

module.exports = {
    mode: isDev ? 'development' : 'production',
    entry: {
        main: (isDev ? ['react-hot-loader/patch', 'webpack-hot-middleware/client'] : []).concat([src('main.js')])
    },
    output: {
        path: resolve('dist'),
        filename: isDev ? '' : 'static/js/[name].[chunkhash].js',
        chunkFilename: isDev ? '' : 'static/js/[name].[chunkhash].js',
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: resolve('')
            },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: 'static/images/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    name: 'static/fonts/[name].[hash:8].[ext]'
                }
            },
            {
                test: /\.css?$/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }, 'postcss-loader']
            },
            {
                test: /\.less?$/,
                exclude: /node_modules/,
                use: ['style-loader', {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                        modules: true,
                        localIdentName: '[local]___[hash:base64:5]'
                    }
                }, 'postcss-loader', {
                    loader: 'less-loader',
                    options: {
                        modifyVars: theme
                    }
                }]
            },
            {
                test: /\.less?$/,
                exclude: /src/,
                use: ['style-loader', MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        minimize: true,
                    }
                }, 'postcss-loader', {
                    loader: 'less-loader',
                    options: {
                        modifyVars: theme
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            MOCK: !!process.env.MOCK,
            CODE_VERSION: `"${gitRevisionPlugin.commithash()}"`
        }),
        new HtmlWebpackPlugin({
            template: src('index.html'),
            filename: 'index.html',
            minify: {
                minifyCSS: true,
                minifyJS: true
            },
            chunks: ['manifest', 'vendor', 'main'],
            // favicon: src('favicon.ico'),
            chunksSortMode: 'dependency'
        }),
        isDev ? new webpack.HotModuleReplacementPlugin() : new webpack.HashedModuleIdsPlugin(),
        isDev ? new MiniCssExtractPlugin({filename: "static/css/[name].css"}) : new MiniCssExtractPlugin({filename: "static/css/[name].[contenthash].css"})
    ],
    resolve: {
        alias: {
            components: src('components'),
            actions: src('actions'),
            assets: src('assets'),
            utils: src('utils')
        },
        extensions: ['*', '.js', '.jsx']
    },
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    }
};