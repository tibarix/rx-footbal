import constants from '../../core/types'

export const loadTeams = competitionCode => {
    return {
        type: constants.LOAD_TEAMS,
        payload: {
            competitionCode
        }
    }
}

export const loadTeamSuccess = teamsInfo => ({
    type: constants.LOAD_TEAMS_SUCCESS,
    payload: {
        teamsInfo,
        isLoadingCompetitions: false
    }
})

export const loadTeamsFailed = error => ({
    type: constants.LOAD_TEAMS_FAIL,
    payload: {
        error,
        isLoadingCompetitions: false
    }
})