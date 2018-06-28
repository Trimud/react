import React from 'react';
import fetcher from '../../fetcher';

const IMAGE_URL = '/episodePreview/';

export default class Slider extends React.Component {
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

    sliderNav = id => {
        this.fetchEpisode(id);
    }

    render = () => (
            <section id="slider">
                <img className="button" src="/left.png" title="previous" alt="nav" onClick={() => this.sliderNav(this.state.id - 1)} />
                <div className="image-container">
                    <img src={this.state.url} alt="episode" />
                </div>
                <img className="button" src="/right.png" title="previous" alt="nav" onClick={() => this.sliderNav(this.state.id + 1)} />
            </section>
        );
}