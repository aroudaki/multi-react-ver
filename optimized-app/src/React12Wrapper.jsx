import React, { Component } from 'react';


export class React12Wrapper extends Component {
    constructor(props) {
        super(props);

        this.wrapperRef = React.createRef();
        this.state = {
            wrapperRenderer: null
        }
    }

    componentDidMount(){
        // TODO: Use proper react version to mount the component to wrapperRef element
        this.wrapperRef.current.innerText = "Fallback to Older React Renderer";
        
        import('react12_wrapper/dist/bundle').then(() => {
            this.setState({wrapperRenderer: window.react12_wrapper.renderComponent})
        });
    }

    componentDidUpdate() {
        if (this.state.wrapperRenderer) {
            this.state.wrapperRenderer(this.props.component(), this.wrapperRef.current);
        }
    }

    render() {
        return (
            <div ref={this.wrapperRef} style={{border: '1px dashed red'}}></div>
        );
    }
}