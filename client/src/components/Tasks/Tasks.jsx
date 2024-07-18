import React, { useEffect, useState } from 'react';
import './tasks.css';
import TaskUnits from '../TaskUnits/TaskUnits';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks');
      if (!response.ok) {
        throw new Error('Error fetching tasks');
      }
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error deleting task');
      }
      setTasks(tasks.filter(task => task._id !== id));
      toast.success('Task deleted successfully');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to delete task');
    }
  };

  const handleUpdate = (updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task._id === updatedTask._id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className='tasks-main'>
      <ToastContainer />
      <div className='tasks-title-container'>
        <div className='tasks-title'>Tasks</div>
        <div className='task-divider'></div>
      </div>
      <div className='task-units-container'>
        {tasks.map(task => (
          <TaskUnits key={task._id} task={task} onDelete={handleDelete} onUpdate={handleUpdate} />
        ))}
      </div>
    </div>
  );
}

export default Tasks;
