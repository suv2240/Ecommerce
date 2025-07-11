import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Header';
import Body from './src/Body';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Body/>
  </React.StrictMode>
);
