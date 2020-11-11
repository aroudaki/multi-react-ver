import React from 'react';

export const Component1 = (props={}) => {
    return <h1>hello {props.name || "Component1"}</h1>
}