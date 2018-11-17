import constants from '../../core/types'

const initialState = {
    teamsInfo: {},
    keyword : '',
    loadingTeams: false
}

function TeamsReducer(state = initialState, { type, payload }) {
    switch (type) {
        case constants.LOAD_TEAMS:
            return {
                ...state,
                loadingTeams: true,
            }

        case constants.LOAD_TEAMS_SUCCESS:{
            return {
                ...state,
                loadingTeams: false,
                teamsInfo: payload.teamsInfo
            }
        }

        
        case constants.LOAD_TEAMS_FAIL:
            return {
                ...state,
                loadingTeams: false,
                error: payload.error
            }


        default:
            return state
    }
}

export default TeamsReducer
