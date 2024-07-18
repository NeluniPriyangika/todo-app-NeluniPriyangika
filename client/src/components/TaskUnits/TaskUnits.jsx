import React, { useState } from 'react';
import './taskUnits.css';
import { FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import UpdateTask from '../UpdateTask/UpdateTask';

function TaskUnits({ task, onDelete , onUpdate}) {

  const [showUpdate, setShowUpdate] = useState(false);

  const getPriorityIcon = (priority) => {
    switch (priority.toUpperCase()) {
      case 'HIGH':
        return <FcHighPriority />;
      case 'MEDIUM':
        return <FcMediumPriority />;
      case 'LOW':
        return <FcLowPriority />;
      default:
        return null;
    }
  };

  const toggleUpdate = () => {
    setShowUpdate(!showUpdate);
  };

  return (
    <div className='task-unit'>
      <div className='icon-container'>
        {getPriorityIcon(task.priority)}
      </div>
      <div className='task-description'>
        {task.title}
      </div>
      <div className='badge'>
        <div className='label-text'>
          {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
        </div>
      </div>
      <div className='date'>
        {new Date(task.dueDate).toLocaleDateString()}
      </div>
      <div className='task-actions'>
        <button className='taskUnits-Updatebutton' onClick={toggleUpdate}>Update Status</button>
        <MdDelete color='red' onClick={() => onDelete(task._id)} />
      </div>
      {showUpdate && (
        <UpdateTask task={task} onUpdate={onUpdate} />
      )}
    </div>
  );
}

export default TaskUnits;
