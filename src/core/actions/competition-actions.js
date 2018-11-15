import constants from '../../core/types'

export const loadCompetitions = () => {
    return {
        type: constants.LOAD_COMPETITIONS,
        payload:{
            isLoading: true,
            competitions: []
        }
    }
}

export const receiveCompetitions = competitions => ({
    type : constants.LOAD_COMPETITIONS_SUCCESS,
    payload : {
        competitions,
        isLoading:false
    }
})

export const loadCompetitionsFailed = error => ({
    type : constants.LOAD_COMPETITIONS_FAIL,
    payload : {
        error,
        competitions: [],
        isLoading:false
    }
})