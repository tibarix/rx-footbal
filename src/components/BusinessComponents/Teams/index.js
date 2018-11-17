import React from 'react';
import { connect } from 'react-redux'
import { loadTeams } from '../../../core/actions/teams-actions';
import Team from './Team';

export class Teams extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            teams : []
        }
    }
    componentDidMount() {
        this.props.loadTeams(this.props.match.params.code)
        console.log(this.props)
    }
    componentWillReceiveProps(newProps) {
        console.log("newProps", newProps)
        this.state.teams = newProps.teamsInfo.teams
    }
    render() {
        return this.state.teams.map( ( team, index) => {
            return <Team {...team} key ={index} />
        });
    }
}

const mdp = dispatch => ({
    loadTeams: code => {
        dispatch(loadTeams(code));
    }
})

const msp = state => ({
    teamsInfo: state.data.TeamsReducer.teamsInfo
})
export default connect(msp, mdp)(Teams);