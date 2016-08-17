export const ADD_CITY = 'ADD_CITY'
export const REMOVE_CITY = 'REMOVE_CITY'

export function AddCity (name) {
  return { type: ADD_CITY, name: name }
}

export function RemoveCity (cityId) {
  return { type: REMOVE_CITY, cityId }
}


export const RECEIVE_FLIGHTS = 'RECEIVE_FLIGHTS'


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
