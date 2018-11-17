import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Competition from '../Competitions/Competition';
import { loadCompetitions } from '../../../core/actions/competition-actions';
import Spinner from '../../BaseComponents/Spinner';
import Notifier, { openSnackbar } from '../../BaseComponents/Notifier';

export class Competitions extends React.Component {
    state = {
        competitions: []
    }
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(!this.props.competitions.length){
            this.props.loadCompetitions();
        }else{
            this.setState({
                competitions : this.props.competitions
            })
        }
    }
    redirectToTeams = code => {
        if (code) {
            let path = `competitions/${code}/teams`;
            this.props.history.push(path);
        } else {
            openSnackbar({ message: 'code not valid' });

        }
    }

    componentWillReceiveProps({ competitions, keyword }) {
        this.state.competitions = competitions;
        let filteredCompetitions = competitions.filter(comp => comp.name.toLowerCase().includes(keyword.toLowerCase()));
        this.setState({
            competitions: filteredCompetitions
        });
    }
    
    renderCompetitions() {
        return (<Fragment>
            <Notifier />
            {
                this.state.competitions.map((competition, key) => {
                    return <Competition key={key} {...competition} redirectToTeams={this.redirectToTeams} />
                })
            }
        </Fragment>)
    }
    render() {
        if (!this.props.loadingCompetitions) {
            return this.renderCompetitions()
        } else {
            return <Spinner />
        }
    }
}
const mapStateToProps = ({ data, ui }) => {
    return {
        competitions: data.CompetitionsReducer.competitions,
        keyword: ui.keyword,
        error: data.CompetitionsReducer.error,
        loadingCompetitions: data.CompetitionsReducer.loadingCompetitions
    };
}
const mapDispatchToProps = dispatch => ({
    loadCompetitions: () => {
        dispatch(loadCompetitions());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Competitions));