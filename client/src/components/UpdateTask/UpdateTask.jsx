import React, { useState } from 'react';
import './updateTask.css'; // Ensure to create this CSS file for styling

const UpdateTask = ({ task, onUpdate }) => {
  const [status, setStatus] = useState(task.status);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${task._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...task, status }),
      });
      if (!response.ok) {
        throw new Error('Error updating task');
      }
      onUpdate({ ...task, status });
      alert('Task updated successfully');
      window.location.href = '/'; // Refresh the page
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to update task');
    }
  };

  return (
    <div className='update-task-modal'>
      <div className='update-task-container'>
        <h3 className='update-task-title'>Update Task Status</h3>
        <p className='task-title'>{task.title}</p> {/* Display task title */}
        <div className='update-task-form'>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value='to-do'>To-Do</option>
            <option value='in progress'>In Progress</option>
            <option value='completed'>Completed</option>
          </select>
          <div className='update-task-buttons'>
            <button className='updatestatus-button' onClick={handleUpdate}>
              Update Status
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
