var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var mqpacker = require('css-mqpacker');
var csswring = require('csswring');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        moduleDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css?$/,
                exclude: '/node_modules/',
                loaders: ['style-loader','css-loader?modules', 'postcss-loader'],
                include: path.join(__dirname, 'src')
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    postcss: function(){
        return [
            autoprefixer,
            mqpacker,
            csswring
        ]
    }
}
