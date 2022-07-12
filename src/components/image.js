import React from 'react';

export default class Image extends React.Component {
    render() {
        return <img src={this.props.imgUrl} alt={this.props.alt}/>;
    }
  }

