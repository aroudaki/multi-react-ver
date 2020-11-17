import React from 'react';
import {Button} from 'office-ui-fabric-react';

export class Component_r14 extends React.Component {
    render(){
        return (
            <div style={{border: '1px solid yellow', padding: 10, color: 'white'}}>
                <Button primary>This component uses react {React.version} - Fabric 2 </Button>
            </div>
        );
    }
}

export const ReactVersion = React.version;