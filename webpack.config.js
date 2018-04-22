const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    entry: {
        button: './src/view/button.js',
    },
    output: {
        path: __dirname + "/dist",
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            ["import", {"libraryName": "antd", "style": "css"}],
                            "@babel/plugin-proposal-decorators",
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-object-rest-spread",
                        ],
                    }
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.css$/,
                use: [{loader: 'style-loader'}, {loader: 'css-loader'}]
            },
            {
                test: /\.less/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader', options: {javascriptEnabled: true}},
                ]

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/html/template.ejs',
            title: '测试webpack',
            chunks: ["button"],
            filename: './button.html',
        }),
        new OpenBrowserPlugin()
    ],
}