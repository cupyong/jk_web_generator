const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require("webpack");
// const uglify = require('uglifyjs-webpack-plugin');

var config = {
    mode: 'production',
    entry: './src/client/app.js',
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: 'static/js/app.[hash].js'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    presets: ['@babel/preset-react'],
                    plugins: [
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        ["@babel/plugin-proposal-class-properties", { "loose" : true }],
                        ["@babel/plugin-proposal-object-rest-spread", { "loose": true, "useBuiltIns": true }]
                    ]
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'static/images/'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'webpack',
            template: './index.html'
        }),
        new ExtractTextPlugin("static/css/styles.css"),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./manifest/manifest.json')
        }),
        
    ],
}
module.exports = (env,argv)=>{
    console.log("当前模式-->",'build')

    return config; 
}