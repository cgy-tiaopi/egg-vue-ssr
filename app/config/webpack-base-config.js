const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
    output: {
        publicPath: '/public/dist/',
        path: path.join(__dirname, '../public/dist'),
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ["vue-style-loader", "css-loader", 'less-loader']  
        }, {
            test: /\.less$/,
            use: ["vue-style-loader", "css-loader", 'less-loader']  
        }, {
            test: /\.(gif|png|jpg|woff|svg|ttf|eot)\??.*$/,
            loader: {
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: './resource/[name].[ext]',
                },
            }
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}