import React from 'react';
import { connect } from 'react-redux'
import Competition from '../Competitions/Competition';
import { loadCompetitions } from '../../core/actions/competition-actions';

export class Competitions extends React.Component {
    state = {
        competitions: [1, 2, 3, 4]
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.loadCompetitions();
    }
    render() {
        return this.props.competitions &&  this.props.competitions.map((competition, key) => {
            return <Competition key={key} {...competition}/>
        });
    }
}
const mapStateToProps = ({ data }) => {
    console.log(data);
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