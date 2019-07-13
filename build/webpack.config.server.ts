import path from 'path';
import nodeExternals from 'webpack-node-externals';
import webpack from 'webpack';

const configuration : webpack.Configuration =  {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  target: 'node',
  devtool: "source-map",
  context: path.resolve(__dirname, './src'),
  entry: {
    'server': [
      path.resolve(__dirname, '../src/index.ts')
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].js',
    publicPath: 'dist/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          }
        ]
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: [
          {
            loader: 'source-map-loader',
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  externals: [
    nodeExternals(
      {
        whitelist: [
          /@material-ui\/core\/*./
        ]
      }
    ),
  ]
}

export default configuration;
