var webpackss = require('webpack');
var ET = require('extract-text-webpack-plugin');

module.exports = {
	//入口文件	
	entry: __dirname + '/src/app.js', //默认的根级目录vuejs文件夹

	output: {
		path: __dirname + '/prd/', //出口文件	
		// filename: 'bundle-[hash].js'  生成版本号，每次修改，生成新的版本号
		filename: 'bundle.js'
	},

	devtool: 'source-map', //查看

	module: {
		loaders: [{
				test: /\.css$/,
				loader: 'style!css'
			},

			{
				test: /\.js$/,
				loader: 'babel-loader?presets[]=es2015'
			},

			{
				test: /\.scss$/,
				// loader: 'style!css!sass'
				loader: ET.extract('style', 'css!sass')
			}, {
				test: /\.string$/,
				loader: 'string'
			}
		]
	},

	devServer: { //手动将webpack服务端口设置成80，默认为8080
		contentBase: __dirname + '/prd', //服务在当前目录下启动
		port: 80,
		host: 'localhost',
		proxy: { //代理
			'/api': { //在地址栏输入localhost/api 默认转到下面定义好的target的地址中
				target: 'http://localhost:9000',
				pathRewrite: {
					'^/api': '' //替换成空字符串
				}
			}
		}
	},

	plugins: [
		new webpackss.optimize.UglifyJsPlugin({

			compress: {
				warnings: false
			}
		}), //压缩css
		new ET('bundle.css') //打包自动生成
	]
}