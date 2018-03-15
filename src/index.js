// const express = require('express');
// const React = require('react');
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
// const renderToString = require('react-dom/server').renderToString;
import Home from './client/components/Home';
// const Home = require('./client/components/Home').default;

const app = express();


// commonJS syntax require
// es6 syntax import need webpack work through


// ReactDOM render renderToString

// node js server cannot parse jsx syntax
app.use(express.static('public'));
app.get('/', (req, res) => {
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
  res.send(content);
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
