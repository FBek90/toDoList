import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
  const initialState = JSON.parse(localStorage.getItem('tasks')) || []

  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  const [editItem, setEditItem] = useState(null)
  // Add tasks
  const addTask = (title) => {
    setTasks([...tasks, { title: title, id: uuid() }])
  }

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  const clearList = () => {
    setTasks([])
  }

  const findItem = (id) => {
    // console.log(id)
    const item = tasks.find((task) => task.id === id)
    // console.log('item', item)
    setEditItem(item)
  }

  // console.log('edit3', editItem)
  const editTask = (title, id) => {
    const newTasks = tasks.map((task) =>
      task.id === id ? { title, id } : task
    )
    // console.log(newTasks)
    setTasks(newTasks)
    setEditItem(null)
  }
  return (
    <TaskListContext.Provider
      value={{
        tasks,
        addTask,
        removeTask,
        clearList,
        findItem,
        editTask,
        editItem,
      }}
    >
      {props.children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider
