const express = require('express');
const router = express.Router();
const Task = require('../models/tasksModels');

// Create a new task
router.post('/', async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();

    // Log activity
    const activity = new Activity({
      user: req.body.user, // Assuming user ID is available in req.body
      action: 'create',
      description: `Created task with title: ${savedTask.title}`,
      relatedTask: savedTask._id,
    });
    await activity.save();

    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update a task
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: 'Task not found' });

     // Log activity
    const activity = new Activity({
      user: req.body.user, // Assuming user ID is available in req.body
      action: 'update',
      description: `Updated task with title: ${updatedTask.title}`,
      relatedTask: updatedTask._id,
    });
    await activity.save();

    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: 'Task not found' });

    // Log activity
    const activity = new Activity({
      user: req.body.user, // Assuming user ID is available in req.body
      action: 'delete',
      description: `Deleted task with title: ${deletedTask.title}`,
      relatedTask: deletedTask._id,
    });
    await activity.save();

    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
