import React, { useState } from 'react';
import {ComponentWrapper} from './componentWrapper'
import logo from './logo.svg';
import './App.css';

function App() {
  const [customComponents, setCustomComponents] = useState();

  if (!customComponents){
    //   Promise.all([
    //     import('component_r17/dist/full-bundle'),
    //     import('component_r15/dist/full-bundle'),
    //     import('component_r14/dist/full-bundle'),
    //     import('component_r12/dist/full-bundle')
    //   ])
    //   .then(() => {
    //     setCustomComponents([
    //       {component: window.ComponentR17.renderComponent},
    //       {component: window.ComponentR15.renderComponent},
    //       {component: window.ComponentR14.renderComponent},
    //       {component: window.ComponentR12.renderComponent},
    //     ])
    //   });

    const importPromises = [];
    for (let c = 1; c < 21; c++) {
      const importPromise = import(`./../component-bundles-not-optimized/c${c}`);
      importPromises.push(importPromise);
    }

    Promise.all(importPromises)
    .then(() => {
      const components = [];
      for (let c = 1; c < 21; c++) {
        components.push({component: window[`CustomComponent_${c}`].renderComponent});
      }
      setCustomComponents(components);
    });

  }


  return (
    <div className="App">
      <header className="App-header">
        <h2>This page is using react {React.version}</h2>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {customComponents && customComponents.map(comp => <ComponentWrapper {...comp} />)}
        {!customComponents && <div>Loading ...</div>}
      </header>
    </div>
  );
}

export default App;
