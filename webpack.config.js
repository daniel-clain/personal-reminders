const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const chalk = require('chalk');


module.exports = ({NODE_ENV}) => {
	if(!NODE_ENV) throw('Gotta specify and environment bro....')
	console.log(chalk.green('YOUR ENVIRONMENT IS '  + NODE_ENV.toUpperCase()))
	return {
		entry: [
			NODE_ENV == 'development' ? './src/other/set-environment-modules/set-environment-development.ts' : `./src/other/set-environment-modules/set-environment-production.ts`,
			'./src/index.tsx'
		],
		devtool: 'source-map',
		devServer: {
			hot: true,
			http2: true
		},
		resolve: {
			extensions: [ '.tsx', '.ts', '.js' ]
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader'
				},
				{
					test: /\.scss$/,
					use: [ 'style-loader', 'css-loader', 'sass-loader' ]
				},
				{
					test: /\.(png|svg|jpg)$/,
					use: [ 'file-loader' ]
				}
			]
		},
		plugins: [
			new HtmlWebPackPlugin({
				title: 'Personal Quiz',
				favicon: './favicon.ico',
				meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
			}),
			new WebpackPwaManifest({
				name: 'Personal Quiz',
				short_name: 'Personal Quiz',
				start_url: '/',
				display: 'standalone',
				icons: [
					{
						src: './pqicon.png',
						sizes: '128x128',
						type: 'image/png'
					}
				],
				background_color: '#172225',
				theme_color: '#172225'
			})
		]
	}
};
