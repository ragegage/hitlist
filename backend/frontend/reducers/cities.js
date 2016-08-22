import { ADD_CITY, REMOVE_CITY, RECEIVE_CITIES } from '../actions'

export default (state = [], action) => {
  switch (action.type){
    case ADD_CITY:
      return [...state,
          action.city
        ]
    case REMOVE_CITY:
      return state.cities.filter((el) => id !== action.cityId)
    case RECEIVE_CITIES:
      return action.cities
    default:
      return state
  }
}
