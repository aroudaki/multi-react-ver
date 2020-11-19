import React from 'react';
import {component} from './component';

export function renderComponent(parentElement) {
  React.renderComponent(component(), parentElement)
}