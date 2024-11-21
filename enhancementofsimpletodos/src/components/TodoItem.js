import React from 'react'

const TodoItem = ({todo, editTodo, toggleEdit, toggleComplete, deleteTodo}) => {
  return (
    <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <input
        type='checkbox'
        checked={todo.isCompleted}
        onChange={() => toggleComplete(todo.id)}
      />
      {todo.isEditing ? (
        <input
          type='text'
          defaultValue={todo.title}
          onBlur={e => editTodo(todo.id, e.target.value)}
        />
      ) : (
        <span onClick={() => toggleEdit(todo.id)}>{todo.title}</span>
      )}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem
