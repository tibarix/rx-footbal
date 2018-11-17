import { combineReducers } from 'redux'
import uiReducer           from 'core/reducers/reducer-ui'
import CompetitionsReducer from './competitions-reducer';
import TeamsReducer from './teams-reducer';

const rootReducer = combineReducers({
  ui:  uiReducer,
  data : combineReducers({
    CompetitionsReducer,
    TeamsReducer
  })
})

export default rootReducer
