import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {React12Wrapper} from './React12Wrapper';
const react12PortalRoot = document.getElementById('react12_portal');


export class React12ComponentPortal extends Component {
    static defaultProps = {
        component: null
    };
    
    constructor(props){
        super(props);

        this.el = document.createElement('div');
        
        this.state = {
            hasError: false,
        }
    }

    componentDidMount() {
        react12PortalRoot.appendChild(this.el);
    }

    componentWillUnmount() {
        react12PortalRoot.removeChild(this.el);
    }

    componentDidCatch(){
        if (this.state.useFallback) {
            this.setState({hasError: true});
        }
    }

    render() {
        const error = <div>Error in loading component</div>;
        if (this.state.hasError) {
            return error;
        } else {
            return ReactDOM.createPortal(<React12Wrapper component={this.props.component} />, this.el);
        }
    }
}