import { takeEvery, put, call } from "redux-saga/effects";
import { fetchCompetitions, fetchTeamsByCompetitionCode } from "../../api"
import constants from '../types'
import {
    receiveCompetitions,
    loadCompetitionsFailed
} from "../actions/competition-actions";

import {
    loadTeamSuccess,
    loadTeamsFailed
} from "../actions/teams-actions";
function* fetchCompetitionsSaga() {
    try {
        const data = yield call(fetchCompetitions);

        yield put(receiveCompetitions(data.competitions.splice(0, 50)));

    } catch (e) {
        yield put(loadCompetitionsFailed(e));
    }
}


function* fetchTeamsSaga({ payload }) {
    try {

        const data = yield call(fetchTeamsByCompetitionCode, payload.competitionCode);
        
        if(data.count){
            yield put(loadTeamSuccess(data));
        }else{
            throw 'This competition is not yet available';
        }

    } catch (e) {
        yield put(loadTeamsFailed(e));
    }
}


export function* watchFetchCompetitions() {
    yield takeEvery(constants.LOAD_COMPETITIONS, fetchCompetitionsSaga);
}
export function* watchFetchTeams() {
    yield takeEvery(constants.LOAD_TEAMS, fetchTeamsSaga);
}
