import React from 'react';
import {DefaultButton} from 'office-ui-fabric-react';

export function Component_r17() {
    return (
        <div style={{border: '1px solid fuchsia', padding: 10, color: 'white'}}>
            <DefaultButton primary>This component uses react {React.version} - Fabric 7 </DefaultButton>
        </div>
    );
}

export const ReactVersion = React.version;