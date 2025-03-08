module.exports = {
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      path: false,
      fs: false
    }
  },
  externals: {
    electron: 'commonjs electron'
  },
  node: {
    __dirname: false,
    __filename: false
  }
}; 