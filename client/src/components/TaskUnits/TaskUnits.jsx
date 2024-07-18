import React from 'react';
import './taskUnits.css';
import { FcHighPriority, FcLowPriority, FcMediumPriority } from "react-icons/fc";
import { MdDelete } from "react-icons/md";

function TaskUnits({ task, onDelete }) {
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
      <div className='delete-icon' onClick={() => onDelete(task._id)}>
        <MdDelete color='red' />
      </div>
    </div>
  );
}

export default TaskUnits;
