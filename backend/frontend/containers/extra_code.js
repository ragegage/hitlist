// import { connect } from 'react-redux'
// import { toggleTodo } from '../actions'
// import TodoList from '../components/TodoList'
//
// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed)
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed)
//   }
// }
//
// const mapStateToProps = (state) => {
//   return {
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
//   }
// }
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }
//
// const VisibleTodoList = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(TodoList)
//
// export default VisibleTodoList
//
//
// import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'
// import Link from '../components/Link'
//
// const mapStateToProps = (state, ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }
//
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }
//
// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link)
//
// export default FilterLink
//
//
// import React from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from '../actions'
//
// let AddTodo = ({ dispatch }) => {
//   let input
//
//   return (
//     <div>
//       <form onSubmit={e => {
//         e.preventDefault()
//         if (!input.value.trim()) {
//           return
//         }
//         dispatch(addTodo(input.value))
//         input.value = ''
//       }}>
//         <input ref={node => {
//           input = node
//         }} />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }
// AddTodo = connect()(AddTodo)
//
// export default AddTodo
