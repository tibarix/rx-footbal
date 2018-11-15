import { takeEvery, put, call } from "redux-saga/effects";
import { fetchCompetitions } from "../../api"
import constants from '../types'
import {
    receiveCompetitions,
    loadCompetitionsFailed
} from "../actions/competition-actions";

function* fetchCompetitionsSaga() {
    try {
        const data = yield call(fetchCompetitions);

        yield put(receiveCompetitions(data.competitions.splice(0,50)));
        
    } catch (e) {
        yield put(loadCompetitionsFailed(e));
    }
}

export function* watchFetchCompetitions() {
    yield takeEvery(constants.LOAD_COMPETITIONS, fetchCompetitionsSaga);
}
