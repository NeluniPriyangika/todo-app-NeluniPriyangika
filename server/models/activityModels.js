const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  user: {
    type: String, // Change to ObjectId and ref 'User' if you have a User model
    required: true,
  },
  action: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now, // Set the default date to the current date and time
  },
  relatedTask: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task', // Assuming activities can be related to tasks
  },
});

module.exports = mongoose.model('Activity', ActivitySchema);
