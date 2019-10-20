import HtmlWebpackPlugin from 'html-webpack-plugin'
//import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin'
//import path from 'path'
import { Configuration } from 'webpack'

const common: Required<Pick<Configuration, 'mode' | 'module'>> = {
	mode: 'development',
	module: {
		rules: [
			// all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
			{ test: /\.tsx?$/, loader: 'ts-loader' }
		]
	}
}

const main: Configuration = {
	...common,
	entry: {
		main: './src/main.ts'
	},
	target: 'electron-main'
}

const react: Configuration = {
	...common,
	entry: {
		react: './src/index.tsx'
	},
	target: 'node',
	resolve: {
		extensions: ['.ts', '.tsx', '.css', '.js', '.jsx', '.svg']
	},
	module: {
		rules: [
			...common.module.rules,
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
		// new HtmlWebpackInlineSourcePlugin()
	]
}

export default [main, react]
