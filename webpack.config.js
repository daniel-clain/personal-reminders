const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin}  = require('clean-webpack-plugin');
const chalk = require('chalk');


let config = {	
	entry: [`${__dirname}/src/index.tsx`],
	
	resolve: {
		extensions: [ '.tsx', '.ts', '.js' ]
	},
	module: {
		rules: [
			{
				test: /\.(j|t)s(x)?$/,
				exclude: /node_modules/,
				use: [
					{loader: 'react-hot-loader/webpack'},
					{
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
						babelrc: false,
						presets: [
							[
								'@babel/preset-env',
								{ targets: { browsers: 'last 2 versions' } }, // or whatever your project requires
							],
							'@babel/preset-typescript',
							'@babel/preset-react',
						],
						plugins: [
							'react-hot-loader/babel',
						],
					},
				}],
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
		new CleanWebpackPlugin(),
		new CopyPlugin({
			patterns: [
				{from: `${__dirname}/src/other/images/`, to: 'images'}
			]
		}),
		new HtmlWebPackPlugin({
			title: 'Personal Priority Reminders',
			favicon: `${__dirname}/favicon.ico`,
			meta: { viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no' }
		}),
		new WebpackPwaManifest({
			name: 'Personal Priority Reminders',
			short_name: 'Personal Priority Reminders',
			start_url: '/',
			display: 'standalone',
			icons: [
				{
					src: `${__dirname}/pricon.png`,
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
			config.entry.unshift(`${__dirname}/src/other/set-environment-modules/set-environment-development.ts`)
		} break
		case 'demo': {
			config.entry.unshift(`${__dirname}/src/other/set-environment-modules/set-environment-demo.ts`)
		} break
		case 'production': {
			config.entry.unshift(`${__dirname}/src/other/set-environment-modules/set-environment-production.ts`)
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

