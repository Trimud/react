import React, { Component } from 'react';

import Rooster from './Rooster';
import Details from './Details';
import fetcher from '../../fetcher';

const ROOSTER_ENPOINT = '/roster';
const DETAILS_ENDPOINT = '/character/';

class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            character: [{
                id: null,
                name: null,
                url: null,
                bio: null
            }]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    fetchRoster = () => fetcher.get(ROOSTER_ENPOINT, data => {
        this.setState({
            data: data
        })
    });

    fetchCharacter = (id) => fetcher.get(DETAILS_ENDPOINT + id, data => {
        this.setState({
            character: [{
                id: data.id,
                name: data.name,
                url: data.url,
                bio: data.bio
            }]
        })
    });

    handleClick(index) {
        this.fetchCharacter(index);
    }

    componentDidMount = () => {
        this.fetchRoster();
        this.fetchCharacter(0);
    }

    render = () => (
            <div className="Characters">
                <Rooster data={this.state.data} handleClick={this.handleClick} />
                <Details data={this.state.character} />
            </div>
        )
}

export default Characters;
