const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    mode: 'development', // Change to 'production' for production build
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
        clean: true, // Clean the output directory before each build
    },
    devtool: 'inline-source-map', // For development, use inline source maps
    devServer: {
        static: path.join(__dirname, '../dist'),
        hot: true,
        port: 8564,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8192, // 8kb
                    },
                },
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true, // Disable image optimization for development
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '../src/index.html'),
            favicon: path.join(__dirname, '../src/assets/favicon.ico'),
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css',
        }),
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                ],
            },
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};

