import React, { Component } from 'react';

export class ComponentWrapper extends Component {
    static defaultProps = {
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
        if (this.state.hasError) {
            return <div>Error in loading component</div>
        } else {
            return(
                <>
                    {this.props.children}
                </>
            );
        }
    }
}