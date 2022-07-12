import React from 'react';

export default class AppWrapper extends React.Component {
    render() {
        return (
            <div className="main_container">
                <h1>{this.props.title}</h1>
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}