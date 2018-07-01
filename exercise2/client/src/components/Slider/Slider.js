import React, { Component } from 'react';
import Image from '../Common/Image';
import fetcher from '../../fetcher';

const IMAGE_URL = '/episodePreview/';

let currentID = 0;
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            url: null
        }
        this.sliderNav = this.sliderNav.bind(this);
    }

    fetchEpisode = id => fetcher.get(IMAGE_URL + id, data => {
        this.setState(data)
    });

    componentDidMount = () => {
        this.fetchEpisode(0);
    }

    componentDidUpdate = () => {
        currentID = this.state.id;
    }

    sliderNav = id => {
        this.fetchEpisode(id);
    }

    render = () => (
            <section id="slider">
                <img
                    className="button"
                    src="/left.png"
                    title="previous"
                    alt="nav"
                    onClick={
                        () => this.sliderNav(
                            currentID > 0 ? currentID - 1 : 2
                        )
                    }
                />
                <div className="image-container">
                    <Image src={this.state.url} alt="episode" />
                </div>
                <img
                    className="button"
                    src="/right.png"
                    title="next"
                    alt="nav"
                    onClick={
                        () => this.sliderNav(
                            currentID < 2 ? currentID + 1 : 0
                        )
                    }
                />
            </section>
        );
}

export default Slider;
