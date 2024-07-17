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
      const response = await fetch('http://localhost:5000/api/tasks', { // Ensure this is the correct endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (!response.ok) {
        throw new Error('Error creating task');
      }

      // Clear input fields
      setTitle('');
      setDescription('');
      setPriority('LOW');
      setDueDate('');

      // You might want to do something after adding a task (e.g., refetch tasks or show a success message)
      alert('Task created successfully');
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating task');
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
        <input
          type='date'
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
