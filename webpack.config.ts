import HtmlWebpackPlugin from 'html-webpack-plugin'
//import path from 'path'
import { Configuration } from 'webpack'

const config: Configuration = {
  mode: 'development',
  entry: { main: './src/main.ts'},
  target: 'electron-main',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false
    })
  ],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}

export default config
