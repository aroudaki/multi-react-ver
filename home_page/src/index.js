// Loading all supported versions of react
import React from 'react';
import * as React15 from 'react15';
// import * as React14 from 'react14';
import * as React12 from 'react12';

// Loading all supported versions of ui fabric
import * as Fabric7 from 'office-ui-fabric-react';
import * as Fabric5 from 'fabric5';
import 'fabric2_wrapper/dist/bundle';

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

global.React17 = React;
global.React15 = React15;
global.React12 = React12;

global.Fabric7 = Fabric7;
global.Fabric5 = Fabric5;

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
