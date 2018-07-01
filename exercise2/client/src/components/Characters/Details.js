import React, { Component } from 'react';
import Image from '../Common/Image';

class Details extends Component {

    render = () => {
        return (
            <section id="bio">
                <div className="image">
                    <Image src={this.props.data[0].url} alt={this.props.data[0].name} />
                </div>
                <div className="info">
                    <p>Name: <strong>{this.props.data[0].name}</strong></p>
                    <p>Bio: {this.props.data[0].bio}</p>
                </div>
            </section>
        )
    }
}

export default Details;
