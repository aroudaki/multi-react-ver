import React from 'react';

export const Component = () => React.createElement("h3", {
        style: {
          border: '1px solid cyan'
        }
      }, `This component uses react ${React.version}`);

export const ReactVersion = React.version;