// https://www.youtube.com/watch?v=fqup-BL3VjI&list=WL&index=6&t=1498s

import React from 'react'
import '../App.css'
import TaskList from './TaskList'
import TaskListContextProvider from '../context/TaskListContext'
import TaskForm from './TaskForm'
import Header from './Header'

const App = () => {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
          <div className='main'>
            <Header />
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  )
}

export default App
