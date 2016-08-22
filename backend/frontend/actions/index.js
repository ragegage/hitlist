export const ADD_CITY = 'ADD_CITY'
export const REMOVE_CITY = 'REMOVE_CITY'

export const addCity = (city) => ({
  type: ADD_CITY,
  city: city
})

export const removeCity = (cityId) => ({
  type: REMOVE_CITY,
  cityId
})

export const REQUEST_CITIES = 'REQUEST_CITIES'
export const RECEIVE_CITIES = 'RECEIVE_CITIES'

export const requestCities = () =>  ({ type: REQUEST_CITIES })

export const receiveCities = (cities) => ({
  type: RECEIVE_CITIES,
  cities: cities
})


export const REQUEST_FLIGHTS = 'REQUEST_FLIGHTS'
export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS'

export const requestFlights = (cityId) => ({
  type: REQUEST_FLIGHTS,
  cityId: cityId
})

export const receiveFlights = ( flights ) => ({
  type: RECEIVE_FLIGHTS,
  flights: flights,
  cityId: flights.length > 0 ? flights[0].from_city_id : undefined
})

// let nextTodoId = 0
// export const addTodo = (text) => {
//   return {
//     type: 'ADD_TODO',
//     id: nextTodoId++,
//     text
//   }
// }
//
// export const setVisibilityFilter = (filter) => {
//   return {
//     type: 'SET_VISIBILITY_FILTER',
//     filter
//   }
// }
//
// export const toggleTodo = (id) => {
//   return {
//     type: 'TOGGLE_TODO',
//     id
//   }
// }
