const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ['LOW', 'MEDIUM', 'HIGH'],
    default: 'LOW',
  },
  status: {
    type: String,
    enum: ['to-do', 'in progress', 'completed'],
    default: 'to-do',
  },
  dueDate: {
    type: Date,
    required: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
