import { combineReducers } from 'redux'
// reducers
import cities from './cities'
import flights from './flights'

export const RootReducer = combineReducers({
  cities,
  flights
})
