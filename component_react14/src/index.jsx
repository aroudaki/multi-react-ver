import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from './component.jsx'

export const renderComponent = (parentElement) => {
  ReactDOM.render(<Component />,  parentElement);
}
