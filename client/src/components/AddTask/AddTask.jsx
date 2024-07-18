import React, { useState } from 'react';
import './addTask.css';

function AddTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('LOW');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      title,
      description,
      priority,
      dueDate: dueDate ? new Date(dueDate) : null,
    };

    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error('Failed to create task');
      }

      // Clear input fields
      setTitle('');
      setDescription('');
      setPriority('LOW');
      setDueDate('');

      alert('Task created successfully');
      window.location.href = '/';
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create task. Please try again.');
    }
  };

  return (
    <div className='add-task-container'>
      <h3 className='add-task-title'>Add a New Task</h3>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Task Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder='Task Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value='LOW'>Low</option>
          <option value='MEDIUM'>Medium</option>
          <option value='HIGH'>High</option>
        </select>
        <div className='dueDate-title'>Add Due Date</div>
        <input
          type='date'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button className='addtask-button' type='submit'>Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
