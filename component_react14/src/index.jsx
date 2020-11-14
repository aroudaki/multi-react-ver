import React from 'react';

export class Component_r14 extends React.Component {
    render(){
        return <h3 style={{border: '1px solid yellow'}}>This component uses react {React.version}</h3>;
    }
}

export const ReactVersion = React.version;