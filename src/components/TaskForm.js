import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)

  const [title, setTitle] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('title', title)
    if (editItem === null) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }
  const handleChange = (e) => {
    setTitle(e.target.value)
    // console.log(e.target.value)
  }
  // console.log(title)

  useEffect(() => {
    // console.log('editItem', editItem)
    if (editItem !== null) {
      setTitle(editItem.title)
    } else {
      setTitle('')
    }
  }, [editItem])
  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        type='text'
        placeholder='Add Task...'
        value={title}
        onChange={handleChange}
        required
        className='task-input'
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          {editItem ? 'Edit Task' : 'Add task'}
        </button>
        <button onClick={clearList} className='btn clear-btn'>
          Clear
        </button>
      </div>
    </form>
  )
}

export default TaskForm
