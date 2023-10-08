import React from 'react'
import './tasks.css'
import TaskUnits from '../TaskUnits/TaskUnits'

function Tasks() {
  return (
    <div className='tasks-main'>
      <div className='tasks-title-container'>
        <div className='tasks-title'>
          Tasks
        </div>
        <div className='task-divider'></div>
      </div>
      <div>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
        <TaskUnits/>
      </div>
    </div>
  )
}

export default Tasks
