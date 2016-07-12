import { combineReducers } from 'redux'
// import visibilityFilter from './visibilityFilter'

const initialState = {
  cities: [ ]
}

const hitlist = function (state = initialState, action){
  switch (action.type){
  case ADD_CITY:
    return Object.assign({}, state, {
      cities: [...state.cities,
        {action.name}
      ]
    })
  case REMOVE_CITY:
    return Object.assign({}, state, {
      cities: state.cities.filter((el, idx) => idx !== action.idx)
    })
  default:
    return state
  }
}

export default hitlist
