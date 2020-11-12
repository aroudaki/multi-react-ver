import React, { useState } from 'react';
import {ComponentWrapper} from './componentWrapper'
import logo from './logo.svg';
import './App.css';

function App() {
  const [customComponents, setCustomComponents]=useState(null);

  if (!customComponents){
    Promise.all([
      import('component_r17/dist/bundle'),
      import('component_r15/dist/bundle'),
      import('component_r10/dist/bundle')
    ])
    .then(() => {
      setCustomComponents({
        ComponentR17: {component: window.ComponentR17.Component_r17, reactVer: window.ComponentR17.ReactVersion},
        ComponentR15: {component: window.ComponentR15.Component_r15, reactVer: window.ComponentR17.ReactVersion},
        ComponentR10: {component: window.ComponentR10.Component_r10, reactVer: window.ComponentR17.ReactVersion},
      });
    });
  }

  const LoadingComponent = (() => <div>Loading ...</div>);
  const ComponentR17 = customComponents?.ComponentR17.component || LoadingComponent;
  const ComponentR15 = customComponents?.ComponentR15.component || LoadingComponent;
  const ComponentR10 = customComponents?.ComponentR10.component || LoadingComponent;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <ComponentWrapper>
          <ComponentR10 />
        </ComponentWrapper>

        <ComponentWrapper>
          <ComponentR15/>
        </ComponentWrapper>

        <ComponentWrapper>
          <ComponentR17 />
        </ComponentWrapper>
      </header>
    </div>
  );
}

export default App;
