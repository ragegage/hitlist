import React from 'react'
import MapContainer from './map_container'
import FlightContainer from './flight_container'

const App = () => (
  <div className='main'>
    <h1>this is hitlist app</h1>
    <MapContainer/>
    <FlightContainer/>
  </div>
)

export default App


// import React, { PropTypes } from 'react'
//
// const Todo = ({ onClick, completed, text }) => (
//   <li
//     onClick={onClick}
//     style={{
//       textDecoration: completed ? 'line-through' : 'none'
//     }}
//   >
//     {text}
//   </li>
// )
//
// Todo.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }
//
// export default Todo
//
// import React, { PropTypes } from 'react'
// import Todo from './Todo'
//
// const TodoList = ({ todos, onTodoClick }) => (
//   <ul>
//     {todos.map(todo =>
//       <Todo
//         key={todo.id}
//         {...todo}
//         onClick={() => onTodoClick(todo.id)}
//       />
//     )}
//   </ul>
// )
//
// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// }
//
// export default TodoList
//
//
// import React, { PropTypes } from 'react'
//
// const Link = ({ active, children, onClick }) => {
//   if (active) {
//     return <span>{children}</span>
//   }
//
//   return (
//     <a href="#"
//        onClick={e => {
//          e.preventDefault()
//          onClick()
//        }}
//     >
//       {children}
//     </a>
//   )
// }
//
// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }
//
// export default Link
//
// import React from 'react'
// import FilterLink from '../containers/FilterLink'
//
// const Footer = () => (
//   <p>
//     Show:
//     {" "}
//     <FilterLink filter="SHOW_ALL">
//       All
//     </FilterLink>
//     {", "}
//     <FilterLink filter="SHOW_ACTIVE">
//       Active
//     </FilterLink>
//     {", "}
//     <FilterLink filter="SHOW_COMPLETED">
//       Completed
//     </FilterLink>
//   </p>
// )
//
// export default Footer
