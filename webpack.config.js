const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: './js/main.js',
    output: {
        clean: true
    },
    module:{
        rules: [
            {
                test:/\.s[ac]ss$/i,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'bable-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template : './index.html'
        }),
        // from에 작성한 폴더명을 dist파일로 copy해주는 플러그인
        new CopyPlugin({
            patterns : [
                {from: 'static'}
            ]
        })
    ]
}