import React from 'react';
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import { loadTeams } from '../../../core/actions/teams-actions';
import Team from './Team';
import Spinner from '../../BaseComponents/Spinner';

export class Teams extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teams: []
        }
    }
    componentDidMount() {
        this.props.loadTeams(this.props.match.params.code)
    }
    componentWillReceiveProps(newProps) {

        this.state.teams = newProps.teamsInfo.teams
        if (newProps.keyword) {
            let filteredTeams = newProps.teamsInfo.teams.filter(team => team.name.toLowerCase().includes(newProps.keyword.toLowerCase()));
            this.setState({
                teams: filteredTeams
            });
        }
    }

    renderTeams() {
        return (
            this.state.teams.map((team, index) => {
                return <Team {...team} key={index} />
            })
        );
    }
    render() {
        if (this.props.loadingTeams) {
            return <Spinner />
        } else {
            return this.renderTeams();
        }
    }
}

const mdp = dispatch => ({
    loadTeams: code => {
        dispatch(loadTeams(code));
    }
})

const msp = state => {
    return {
        teamsInfo: state.data.TeamsReducer.teamsInfo,
        loadingTeams: state.data.TeamsReducer.loadingTeams,
        error: state.data.TeamsReducer.error,
        keyword: state.ui.keyword
    };
}
export default connect(msp, mdp)(Teams);