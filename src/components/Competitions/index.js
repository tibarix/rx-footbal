import React from 'react';
import Competition from '../Competitions/Competition';
import axios from 'axios';
export class Competitions extends React.Component {
    state = {
        competitions : []
    }
    fetchCompetitions() {
        axios.get('https://api.football-data.org/v2/competitions',
            {
                headers: { 'X-Auth-Token': '4d61ef99b9a44603b67a0ec1e9f934ef' }
            })
            .then(({data}) => state.competitions = data.competitions)
            .catch(err => console.error(err));
    }
    constructor(props) {
        super(props);
        this.fetchCompetitions();
    }

    render() {
        return this.state.competitions.map((competition, key) => {
            return <Competition key={key} />
        });
    }
}

