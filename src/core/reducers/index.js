import { combineReducers } from 'redux'
import uiReducer           from 'core/reducers/reducer-ui'
import CompetitionsReducer from './competitions-reducer';

const rootReducer = combineReducers({
  ui:  uiReducer,
  data : CompetitionsReducer
})

export default rootReducer
