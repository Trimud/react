import React from 'react';
import fetcher from '../../fetcher';

const ROSTER_URL = '/roster/';

export default class Rooster extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null,
            url: null,
            bio: null
        }
        // this.sliderNav = this.sliderNav.bind(this);
    }

    fetchRoster = id => fetcher.get(ROSTER_URL + id, data => {
        this.setState(data)
    });

    componentDidMount = () => {
        this.fetchRoster(0);
    }

    render = () => {
        return (
            <section id="roster">
                <div className="roster-image-container">
                    <img src={this.state.url} alt="roster" />
                </div>
            </section>
        )
    }
}