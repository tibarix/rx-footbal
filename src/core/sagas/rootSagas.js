import { fork } from "redux-saga/effects";
import {watchFetchCompetitions, watchFetchTeams} from "./sagas";

export default function* (){
  yield fork(watchFetchCompetitions);
  yield fork(watchFetchTeams);
}