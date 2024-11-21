import React, {useState} from 'react'
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

const App = () => {
  const [todos, setTodos] = useState([])

  const addTodo = title => {
    const newTodos = title.split(' ').map(item => ({
      id: Math.random(),
      title: item,
      isCompleted: false,
      isEditing: false,
    }))
    setTodos(prevTodos => [...prevTodos, ...newTodos])
  }

  const editTodo = (id, newTitle) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, title: newTitle, isEditing: false} : todo,
      ),
    )
  }

  const toggleEdit = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo,
      ),
    )
  }

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo,
      ),
    )
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className='app-container'>
      <h1>Simple Todos</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        toggleEdit={toggleEdit}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  )
}

export default App
