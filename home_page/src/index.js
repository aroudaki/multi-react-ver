// Loading all supported versions of react
import React from 'react';
import ReactDOM from 'react-dom';
import * as React12 from 'react12';

// Loading all supported versions of ui fabric
import 'react17-fabric7-wrapper/dist/bundle';
import 'react14-fabric2-wrapper/dist/bundle';
import * as Fabric7 from 'office-ui-fabric-react'
import * as Fabric5 from 'fabric5';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

global.React12 = React12;

global.Fabric5 = Fabric5;
global.Fabric7 = Fabric7;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
