import { fork } from "redux-saga/effects";
import {watchFetchCompetitions} from "./sagas";

export default function* (){
  yield fork(watchFetchCompetitions);
}