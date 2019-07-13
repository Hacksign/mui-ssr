import path from 'path';
import webpack from 'webpack';

const configuration : webpack.Configuration =  {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  target: 'web',
  devtool: "source-map",
  context: path.resolve(__dirname, './src'),
  entry: {
    'public/components/index': [
      path.resolve(__dirname, '../src/containers/index/index.tsx')
    ],
  },
  output: {
    path: path.resolve(__dirname, '../dist/'),
    filename: '[name].js',
    publicPath: '/',
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
    {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'redux': 'Redux',
      'react-redux': 'ReactRedux',
      '@material-ui/core': 'window["MaterialUI"]',
    },
  ]
}

export default configuration;
