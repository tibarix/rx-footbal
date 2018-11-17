import React from 'react';
import { connect } from 'react-redux'
import Competition from '../Competitions/Competition';
import { loadCompetitions } from '../../core/actions/competition-actions';
import Spinner from '../Spinner';

export class Competitions extends React.Component {
    state = {
        competitions: []
    }
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps({ competitions, keyword }) {
        this.state.competitions = competitions;
        let filteredCompetitions = competitions.filter(comp => comp.name.includes(keyword));
        this.setState({
            competitions: filteredCompetitions
        });
    }
    componentDidMount() {
        this.props.loadCompetitions();
    }
    renderCompetitions() {
        return this.state.competitions.map((competition, key) => {
            return <Competition key={key} {...competition} />
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
const mapStateToProps = ({ data }) => {
    return {
        competitions: data.competitions,
        keyword: data.keyword,
        error: data.error,
        loadingCompetitions: data.loadingCompetitions
    };
}
const mapDispatchToProps = dispatch => ({
    loadCompetitions: () => {
        dispatch(loadCompetitions());
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Competitions);