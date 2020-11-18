import React from 'react';
import {Component_r12 as component} from './component';

export function renderComponent(parentElement) {
  React.renderComponent(component(), parentElement)
}