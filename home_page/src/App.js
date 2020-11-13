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
      import('component_r10/dist/bundle')
    ])
    .then(() => {
      setCustomComponents([
        {component: window.ComponentR17.Component_r17, reactVersion: window.ComponentR17.ReactVersion},
        {component: window.ComponentR15.Component_r15, reactVersion: window.ComponentR15.ReactVersion},
        {component: window.ComponentR10.Component_r10, reactVersion: window.ComponentR10.ReactVersion},
      ])
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {customComponents && customComponents.map(comp => <ComponentWrapper {...comp} />)}
        {!customComponents && <div>Loading ...</div>}
      </header>
    </div>
  );
}

export default App;
