import { combineReducers } from 'redux'
import { ADD_CITY, REMOVE_CITY, RECEIVE_FLIGHTS } from '../actions'

const hitlist = combineReducers({
  cities,
  flights
})

const cities = (state = [], action) => {
  switch (action.type){
  case ADD_CITY:
    return [...state.cities,
        {name: action.name}
      ]
  case REMOVE_CITY:
    return state.cities.filter((el) => id !== action.cityId)
  default:
    return state
  }
}

const flights = (state = {}, action) => {
  switch (action.type){
    case RECEIVE_FLIGHTS:
      return {[action.cityId]: action.flights}
    default:
      return state
  }
}

export default hitlist
