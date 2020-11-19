import React, { useState } from 'react';
import {ComponentWrapper} from './componentWrapper'
import './App.css';

function App() {
  const [customComponents, setCustomComponents] = useState();

  if (!customComponents){
    const importPromises = [];
    for (let c = 1; c < 21; c++) {
      const importPromise = import(`./../component-bundles-optimized/c${c}`);
      importPromises.push(importPromise);
    }

    Promise.all(importPromises)
    .then(() => {
      const components = [];
      for (let c = 1; c < 21; c++) {
        components.push({
          component: window[`CustomComponent_${c}`].Component, 
          reactVersion: window[`CustomComponent_${c}`].ReactVersion
        });
      }
      setCustomComponents(components);
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
