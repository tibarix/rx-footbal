import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loadTeams } from '../../../core/actions/teams-actions';
import { filterItems } from '../../../core/actions/actions-ui'
import { selectCompetition } from '../../../core/reducers';
import Team from './Team';
import Spinner from '../../BaseComponents/Spinner';
import CompetitionDetail from '../Competitions/CompetitionDetail';
import { Grid } from '@material-ui/core';

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
            <Grid>
               <CompetitionDetail {...this.props.competition} teams={this.state.teams.length}/>
                <div className='container'>
                <Grid container spacing={32} justify="center">
                    {
                        this.state.teams.map((team, index) => {
                            return <Team {...team} key={index} />
                        })
                    }
                </Grid>
                </div>
            </Grid>
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

const msp = (state,props) => {
    return {
        teamsInfo: state.data.TeamsReducer.teamsInfo,
        loadingTeams: state.data.TeamsReducer.loadingTeams,
        error: state.data.TeamsReducer.error,
        keyword: state.ui.keyword,
        competition : selectCompetition(state,props.match.params.code)
    };
}
export default connect(msp, mdp)(Teams);