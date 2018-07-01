import React, { Component } from 'react';
import Image from '../Common/Image';

class Rooster extends Component {
    render = () => {
        return (
            <section id="roster">
                    {this.props.data.map(
                        (image) =>
                        <div className="roster-image-container" key={image.id} onClick={() => this.props.handleClick(image.id)}>
                            <Image src={image.url} alt="roster" />
                        </div>
                    )}
            </section>
        )
    }
}

export default Rooster;
