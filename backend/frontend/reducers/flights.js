import { RECEIVE_FLIGHTS } from '../actions'

export default (state = [], action) => {
  switch (action.type){
    case RECEIVE_FLIGHTS:
      return action.flights
    default:
      return state
  }
}
