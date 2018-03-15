import React from 'react';
import { renderToString } from 'react-dom/server';
// const renderToString = require('react-dom/server').renderToString;
import Home from './client/components/Home';

const content = renderToString(<Home />);
const html = `
  <html>
    <head></head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js" />
    </body>
  </html>
`;
