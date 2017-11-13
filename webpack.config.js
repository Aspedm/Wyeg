var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');

const extractLess = new ExtractTextPlugin({
    filename: "[name].min.css",
    disable: process.env.NODE_ENV === "development",
	allChunks: true
});

module.exports = {
    entry: {
		wyeg: [
			'./src/js/main.js',
			'./src/styles/main.less'
		]
	},

    output:{
        path: __dirname + '/dist/build',
        filename: '[name]-bundle.js',
    },
    resolve: {
        alias: {
          vue: 'vue/dist/vue.js'
        }
    },
    module: {
        loaders:[
            {
                test:/.vue$/, 
                loader:'vue-loader', 
                exclude:/node_modules/
            },
            {
                test:/\.js$/, 
                loader:'babel-loader', 
                exclude:/node_modules/
            },
            {
				test: /\.less$/,
				use: extractLess.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								url: false,
								sourceMap: true
							}
						},
						{
							loader: 'less-loader',
							options: {
								sourceMap: true
							}
						}
					],
					fallback: 'style-loader'
				})
			}
        ],
    },
    plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			}
		}),
		extractLess
	]
}