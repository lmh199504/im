const path = require('path')
// const TerserPlugin = require('terser-webpack-plugin')

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
		},
		disableHostCheck: true
	},

	configureWebpack: {
		externals: {
			'vue': 'Vue',
			// 'element-ui': 'ELEMENT',
			'vue-router': 'VueRouter'
		}
	},
	chainWebpack: config => {

		/* 添加分析工具*/
		if (process.env.NODE_ENV === 'production') {
			if (process.env.npm_config_report) {
				config
					.plugin('webpack-bundle-analyzer')
					.use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
					.end();
				config.plugins.delete('prefetch')
			}
		}

		config.resolve.alias
			.set('@', resolve('src'))
			.set('tim', resolve('src/tim.js'))
		config
			.when(process.env.NODE_ENV !== 'development',
				config => {
					config
						.optimization.splitChunks({
							chunks: 'all',
							maxSize:500000,
							cacheGroups: {
								libs: {
									name: 'chunk-libs',
									test: /[\\/]node_modules[\\/]/,
									priority: 10,
									chunks: 'initial' // only package third parties that are initially dependent
								},
								timSdk:{
									name: 'chunk-timSdk', // split mintUi into a single package
									priority: 120, // the weight needs to be larger than libs and app or it will be packaged into libs or app
									test: /[\\/]node_modules[\\/]_?tim-js-sdk(.*)/ // in order to adapt to cnpm
								},
								trtcSdk:{
									name: 'chunk-trtcSdk', // split mintUi into a single package
									priority: 100, // the weight needs to be larger than libs and app or it will be packaged into libs or app
									test: /[\\/]node_modules[\\/]_?trtc-js-sdk(.*)/ // in order to adapt to cnpm
								},
								swiper:{
									name: 'chunk-swiper', // split mintUi into a single package
									priority: 110, // the weight needs to be larger than libs and app or it will be packaged into libs or app
									test: /[\\/]node_modules[\\/]_?swiper(.*)/ // in order to adapt to cnpm
								},
								// elementUI: {
								// 	name: 'chunk-elementUI', // split elementUI into a single package
								// 	priority: 100, // the weight needs to be larger than libs and app or it will be packaged into libs or app
								// 	test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
								// },
								cosSdk:{
									name: 'chunk-cosSdk', // split mintUi into a single package
									priority: 120, // the weight needs to be larger than libs and app or it will be packaged into libs or app
									test: /[\\/]node_modules[\\/]_?cos-js-sdk-v5(.*)/ // in order to adapt to cnpm
								},
								// mintUi: {
								// 	name: 'chunk-mintUi', // split mintUi into a single package
								// 	priority: 130, // the weight needs to be larger than libs and app or it will be packaged into libs or app
								// 	test: /[\\/]node_modules[\\/]_?mint-ui(.*)/ // in order to adapt to cnpm
								// },
								commons: {
									name: 'chunk-commons',
									test: resolve('src/components'), // can customize your rules
									minChunks: 3, //  minimum common number
									priority: 5,
									reuseExistingChunk: true
								}
							}
						})
					config.optimization.runtimeChunk('single')
				}
			)
	},
	css: {
		loaderOptions: {
			stylus: {
				'resolve url': true,
				// 自定义主题场景
				import: [path.resolve(__dirname, './src/assets/css/base.styl')]
			}
		}
	},
	// configureWebpack: {
	// 	minimizer: [
	// 		new TerserPlugin({
	// 			terserOptions: {
	// 				compress: {
	// 					pure_funcs: ["console.log"]
	// 				}
	// 			}
	// 		})
	// 	]
	// }
}
