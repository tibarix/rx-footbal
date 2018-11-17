import constants from '../../core/types'

const initialState = {
    competitions: [],
    keyword : '',
    loadingCompetitions: false
}

function CompetitionsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case constants.LOAD_COMPETITIONS:
            return {
                ...state,
                loadingCompetitions: true,
            }

        case constants.LOAD_COMPETITIONS_SUCCESS:
            return {
                ...state,
                loadingCompetitions: false,
                competitions: payload.competitions
            }
        case constants.LOAD_COMPETITIONS_FAIL:
            return {
                ...state,
                loadingCompetitions: false,
                competitions: [],
                error: payload.error
            }
        case constants.FILTER_COMPETITIONS:{
            return {
                ...state,
                keyword:payload.keyword
            }
        }
            


        default:
            return state
    }
}

export default CompetitionsReducer
