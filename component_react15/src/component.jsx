import React from 'react';
import {DefaultButton} from 'office-ui-fabric-react';

export class Component extends React.Component {
    render(){
        return (
            <div style={{border: '1px solid green', padding: 10, color: 'white'}}>
                <DefaultButton primary>This component uses react {React.version} - Fabric 5 </DefaultButton>
            </div>
        );
    }
}

export const ReactVersion = React.version;