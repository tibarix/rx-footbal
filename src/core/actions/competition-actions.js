import constants from '../../core/types'

export const loadCompetitions = () => {
    return {
        type: constants.LOAD_COMPETITIONS,
        payload: {
            isLoadingCompetitions: true,
            competitions: []
        }
    }
}

export const receiveCompetitions = competitions => ({
    type: constants.LOAD_COMPETITIONS_SUCCESS,
    payload: {
        competitions,
        isLoadingCompetitions: false
    }
})

export const loadCompetitionsFailed = error => ({
    type: constants.LOAD_COMPETITIONS_FAIL,
    payload: {
        error,
        competitions: [],
        isLoadingCompetitions: false
    }
})

export const filterCompetitions = keyword => ({
    type: constants.FILTER_COMPETITIONS,
    payload: {
        keyword
    }
})