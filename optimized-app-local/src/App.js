import React, { useState } from 'react';
import {ComponentWrapper} from './componentWrapper'
import logo from './logo.svg';
import './App.css';

function App() {
  const [customComponents, setCustomComponents] = useState();

  if (!customComponents){
    Promise.all([
      import('component_r17/dist/bundle'),
      import('component_r15/dist/bundle'),
      import('component_r14/dist/bundle'),
      import('component_r12/dist/bundle')
    ])
    .then(() => {
      setCustomComponents([
        {component: window.ComponentR17.Component, reactVersion: window.ComponentR17.ReactVersion},
        {component: window.ComponentR15.Component, reactVersion: window.ComponentR15.ReactVersion},
        {component: window.ComponentR14.Component, reactVersion: window.ComponentR14.ReactVersion},
        {component: window.ComponentR12.Component, reactVersion: window.ComponentR12.ReactVersion},
        {component: 'dummy not supported component', reactVersion: '0.10.0'},
      ]);
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <h2>Optimized App</h2>
        <h3>This page is using react {React.version}</h3>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {customComponents && customComponents.map(comp => <ComponentWrapper {...comp} />)}
        {!customComponents && <div>Loading ...</div>}
      </header>
    </div>
  );
}

export default App;
