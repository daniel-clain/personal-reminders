const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyPlugin = require('copy-webpack-plugin');
const chalk = require('chalk');


let config = {	
	entry: ['./src/index.tsx'],
	
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: {
					loader: 'ts-loader'
				},
			},
			{
				test: /\.s[ac]ss$/,
				use: [ 'style-loader', 'css-loader', 
				{
					loader: 'sass-loader', options: {						
						implementation: require('sass')
					}
				}]
			}
		]
	},
	plugins: [
		new CopyPlugin({
			patterns: [
				{from: './src/other/images/', to: 'images'}
			]
		}),
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

module.exports = (environment, {mode}) => {

	if(!environment) throw('Gotta specify and environment bro....')

	console.log(chalk.green(`YOUR ENVIRONMENT IS ${environment}`.toUpperCase()))
	console.log(chalk.blue(`YOUR MODE IS ${mode}`.toUpperCase()))
	switch(environment){
		case 'development': {
			config.entry.unshift('./src/other/set-environment-modules/set-environment-development.ts')
		} break
		case 'demo': {
			config.entry.unshift('./src/other/set-environment-modules/set-environment-demo.ts')
		} break
		case 'production': {
			config.entry.unshift('./src/other/set-environment-modules/set-environment-production.ts')
		} break
	}
	switch(mode){
		case 'development': {
			config.devtool = 'source-map'
			config.devServer = {
				hot: true,
				https: true
			}			
		} break
		case 'production': {
			config.optimization = {
				sideEffects: false,
				splitChunks: {
					chunks: 'all'
				}
			}
		} break
	}

	return config
};

