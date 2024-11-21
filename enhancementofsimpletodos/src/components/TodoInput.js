import React, {useState} from 'react'

const TodoInput = ({addTodo}) => {
  const [inputValue, setInputValue] = useState('')

  const handleAdd = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim())
      setInputValue('')
    }
  }

  return (
    <div className='todo-input'>
      <input
        type='text'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder='Enter todo title and number...'
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput
