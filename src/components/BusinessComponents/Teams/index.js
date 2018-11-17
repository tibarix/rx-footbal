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
    }

    renderTeams() {
        return (
            <div className="container" >
                <Grid container justify="center" spacing={40}>
                    {
                        this.state.teams.map((team, index) => {
                            return <Team {...team} key={index} />
                        })
                    }
                </Grid>
            </div>
        );
    }
    render() {
        if(this.props.loadingTeams){
            return <Spinner />
        }else{
            return this.renderTeams();
        }
    }
}

const mdp = dispatch => ({
    loadTeams: code => {
        dispatch(loadTeams(code));
    }
})

const msp = state => ({
    teamsInfo: state.data.TeamsReducer.teamsInfo,
    loadingTeams: state.data.TeamsReducer.loadingTeams
})
export default connect(msp, mdp)(Teams);