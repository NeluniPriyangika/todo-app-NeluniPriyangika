const express = require('express');
const router = express.Router();
const Activity = require('../models/activityModel'); // Adjust the path as needed

// Route to fetch all activities
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find().populate('relatedTask', 'title'); // Populating related task's title
    res.json(activities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
