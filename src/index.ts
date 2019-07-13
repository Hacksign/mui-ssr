import express from 'express';
import webpack from 'webpack';
import path from 'path';
import favicon from 'serve-favicon';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import BundleWebpackAnalyzer from 'webpack-bundle-analyzer';
import clientConfig from '../build/webpack.config.client';
import { server_side_render } from './helpers';
import routes from './routes';

const app : express.Application = express();
app.use(
  favicon(path.join(process.cwd(), 'public/assets/favicon.ico'))
);

if (process.env.NODE_ENV === 'development') {
  for(const component in <webpack.Entry>clientConfig.entry) {
    ((<webpack.Entry>clientConfig.entry)[component] as string[]).unshift('webpack-hot-middleware/client');
  }
  (<webpack.Plugin[]>clientConfig.plugins).push(new BundleWebpackAnalyzer.BundleAnalyzerPlugin());

  const clientCompiler = webpack(clientConfig);

  app.use(
    webpackDevMiddleware(
      clientCompiler,
      {
        publicPath: <string> clientConfig.output!.publicPath,
      }
    )
  );

  app.use(webpackHotMiddleware(clientCompiler));
}

app.get(
  '*',
  (request : express.Request, response : express.Response) => {
    server_side_render(
      routes.component,
      (html_str) => {
        response.end(html_str);
      }
    );
  }
);

app.listen(
  8090 || process.env.NODE_PORT,
  () => {
    console.log('[+] server started.');
  }
)
