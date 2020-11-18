import React, { Component } from 'react';

export class ComponentWrapper extends Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
    }

    componentDidMount(){        
        this.props.component(this.wrapperRef.current);
    }

    componentDidUpdate() {
    }

    render() {
        return (
            <div ref={this.wrapperRef} style={{border: '1px dashed red'}}></div>
        );
    }
}