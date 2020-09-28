const path = require('path')

function resolve(dir) {
	return path.join(__dirname, dir)
}
module.exports = {
	publicPath: './',
	assetsDir: './',
	productionSourceMap: false,

	devServer: {
		// 设置代理
		proxy: {
			"/api": {
				// target: "https://uapi.jiuyepay.cn", //测试域名
				target: "http://fxdl.xmpinshangmy.cn", // 开发域名 
				ws: false, // 是否启用websockets
				changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
				// pathRewrite: {
				// 	"^/api": ""
				// }
			}
		}
	},
	chainWebpack: config => {
		config.resolve.alias
			.set('@', resolve('src'))
			.set('tim', resolve('src/tim.js'))
	},
	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				// 自定义主题场景
				import: [path.resolve(__dirname, './src/assets/css/base.styl')]
			}
		}
	}
}
