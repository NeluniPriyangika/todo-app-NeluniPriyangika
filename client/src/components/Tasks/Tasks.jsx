import React from 'react';
import './tasks.css';
import TaskUnits from '../TaskUnits/TaskUnits';

function Tasks() {
  return (
    <div className='tasks-main'>
      <div className='tasks-title-container'>
        <div className='tasks-title'>Tasks</div>
        <div className='task-divider'></div>
      </div>
      <div className='task-units-container'>
        {/* Render TaskUnits dynamically if you have an array of tasks */}
        {[...Array(9)].map((_, index) => (
          <TaskUnits key={index} />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
