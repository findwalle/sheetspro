const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js', // bracket will be replaced by whatever is in entry
    },
    module: {
        // loaders
        rules: [
            // object for each file type/loader
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'style.loader',
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sheets Pro',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}