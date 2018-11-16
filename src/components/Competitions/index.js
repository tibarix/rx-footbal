import React from 'react';
import { connect } from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Competition from '../Competitions/Competition';
import { loadCompetitions } from '../../core/actions/competition-actions';
import Spinner from '../Spinner';

export class Competitions extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.loadCompetitions();
    }
    renderCompetitions() {
        return this.props.competitions.map((competition, key) => {
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