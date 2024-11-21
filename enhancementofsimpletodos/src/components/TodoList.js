import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({
  todos,
  editTodo,
  toggleEdit,
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          toggleEdit={toggleEdit}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
