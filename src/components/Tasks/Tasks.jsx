import React from 'react'
import './tasks.css'
import TaskUnits from '../TaskUnits/TaskUnits'
import Pagination from 'react-bootstrap/Pagination';

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
      </div>
      <div className='tasksPagination'>
        <Pagination>
          <Pagination.Prev />
          <Pagination.Item className='pageActive'>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div> 
    </div>
  )
}

export default Tasks
