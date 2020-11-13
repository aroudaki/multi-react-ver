import React, { Component } from 'react';
import {React10Wrapper} from './react10Wrapper';

const SupportedFallbackReactVersions = ['0.10'];
const SupportedReactVersions = ['15', '16', '17'];

export class ComponentWrapper extends Component {
    static defaultProps = {
        component: null,
        reactVersion: React.version
    };

    state = {
        hasError: false,
        useFallback: false
    }

    componentDidCatch(){
        if (this.state.useFallback) {
            this.setState({hasError: true});
        } else {
            this.setState({useFallback: true});
        }
    }

    render() {
        const error = <div>Error in loading component</div>;
        if (this.state.hasError) {
            return error;
        } else if (SupportedReactVersions.some(ver => this.props.reactVersion.indexOf(ver) >= 0)) {
            const Component = this.props.component;
            return <Component />;
        } else if (SupportedFallbackReactVersions.some(ver => this.props.reactVersion.indexOf(ver) >= 0)) {
            return <React10Wrapper component={this.props.component} />;
        } else {
            return error;
        }
    }
}