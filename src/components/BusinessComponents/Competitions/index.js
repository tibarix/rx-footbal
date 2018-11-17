import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import Competition from '../Competitions/Competition';
import { loadCompetitions } from '../../../core/actions/competition-actions';
import Spinner from '../../BaseComponents/Spinner';

export class Competitions extends React.Component {
    state = {
        competitions: []
    }
    constructor(props) {
        super(props);
    }

    redirectToTeams = code => {
        if (code) {
            let path = `competitions/${code}/teams`;
            this.props.history.push(path);
        } else {
            alert("code invalid");
        }
    }

    componentWillReceiveProps({ competitions, keyword }) {
        this.state.competitions = competitions;
        let filteredCompetitions = competitions.filter(comp => comp.name.toLowerCase().includes(keyword.toLowerCase()));
        this.setState({
            competitions: filteredCompetitions
        });
    }
    componentDidMount() {
        this.props.loadCompetitions();
    }
    renderCompetitions() {
        return this.state.competitions.map((competition, key) => {
            return <Competition key={key} {...competition} redirectToTeams={this.redirectToTeams} />
        });
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
    console.warn(data, ui)
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