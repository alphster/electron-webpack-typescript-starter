import HtmlWebpackPlugin from 'html-webpack-plugin'
// import path from 'path'
import { Configuration } from 'webpack'
import { Configuration as DevServer } from 'webpack-dev-server'

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
	name: 'main',
	entry: {
		main: './src/main/main.ts'
	},
	target: 'electron-main'
}

const react: Configuration & DevServer = {
	...common,
	name: 'renderer',
	entry: {
		react: './src/renderer/renderer.tsx'
	},
	target: 'electron-renderer',
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
			template: 'src/renderer/index.html'
		})
		// new HtmlWebpackInlineSourcePlugin()
	]
}

export default [main, react]
