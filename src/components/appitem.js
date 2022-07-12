import React from 'react';
import Image from './image';

export default class AppItem extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <Image imgUrl={this.props.imgUrl} alt={this.props.alt} />
                <p>{this.props.description}</p>
            </div>
        );
    }
}