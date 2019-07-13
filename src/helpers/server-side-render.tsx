import React from 'react';
import ejs from 'ejs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';

import theme from '../helpers/theme';

const server_side_render = (Component : any, callback : (param1 : string|undefined) => void) : void => {
  let sheets = new ServerStyleSheets();
  const component_html : string = renderToString(
    sheets.collect(
      <ThemeProvider theme = { theme }>
        <Component />
      </ThemeProvider>
    )
  );
  const styles : string = sheets.toString();
  ejs.renderFile(
    path.resolve(process.cwd(), 'public/index.template.ejs'),
    {
      styles : styles,
      component: component_html,
    },
    (err, str) => {
      callback(str);
    }
  );
}

export default server_side_render;