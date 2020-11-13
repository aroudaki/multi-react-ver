import React, { Component } from 'react';

export class React10Wrapper extends Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
    }

    componentDidMount(){
        // TODO: Use proper react version to mount the component to wrapperRef element
        this.wrapperRef.current.innerText = "Fallback to Older React Renderer"
    }

    render() {
        return (
            <div ref={this.wrapperRef}></div>
        );
    }
}