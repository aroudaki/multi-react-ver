import React, { Component } from 'react';
import {React12Wrapper} from './React12Wrapper';

const SupportedFallbackReactVersions = ['0.12'];
const SupportedReactVersions = ['14', '15', '16', '17'];

export class ComponentWrapper extends Component {
    static defaultProps = {
        component: null,
        reactVersion: React.version
    };

    state = {
        hasError: false,
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
        } else if (SupportedReactVersions.some(ver => this.props.reactVersion.indexOf(ver) >= 0)) {
            const Component = this.props.component;
            return <Component />;
        } else if (SupportedFallbackReactVersions.some(ver => this.props.reactVersion.indexOf(ver) >= 0)) {
            return <React12Wrapper component={this.props.component} />;
        } else {
            return <div>This component uses React version {this.props.reactVersion} which is not supported</div>;
        }
    }
}