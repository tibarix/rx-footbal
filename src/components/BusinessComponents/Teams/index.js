import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadTeams } from '../../../core/actions/teams-actions';
import { filterItems } from '../../../core/actions/actions-ui'
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
        this.props.clearInput();
    }
    componentWillReceiveProps(newProps) {
        this.state.teams = newProps.teamsInfo.teams
        if (this.props.teamsInfo.teams) {
            if (newProps.keyword && this.props.teamsInfo.teams && Object.keys(newProps.teamsInfo).length && newProps.teamsInfo.teams) {
                let filteredTeams = newProps.teamsInfo.teams.filter(team => team.name.toLowerCase().includes(newProps.keyword.toLowerCase()));
                this.setState({
                    teams: filteredTeams
                });
            } else {
                this.setState({
                    teams: this.props.teamsInfo.teams
                });
            }
        }
    }

    renderTeams() {
        return (
            <Fragment>
                <h1>Teams:</h1>
                {
                    this.state.teams.map((team, index) => {
                        return <Team {...team} key={index} />
                    })
                }
            </Fragment>
        );
    }
    render() {
        if (this.props.loadingTeams) {
            return <Spinner />
        } else {
            if (this.props.error) {
                return <h1>{this.props.error} <Link to='/'> Go back </Link> </h1>
            } else
                return this.renderTeams();
        }
    }
}

const mdp = dispatch => ({
    loadTeams: code => {
        dispatch(loadTeams(code));
    },
    clearInput: () => {
        dispatch(filterItems(''))
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