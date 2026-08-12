var express = require('express');
var router = express.Router();
var Task = require('./../model/tasks');

/* GET home page */
router.get('/', async (req, res, next) => {
  try {
    const title = req.query.title || 'Task Manager';
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.render('index', { title, tasks });
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Error loading tasks', error: err });
  }
});

/* POST add new task */
router.post('/add', async (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const newTask = await Task.create({
      title,
      description,
      status: false,
    });

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Error creating task', error: err });
  }
});

/* GET toggle task status */
router.get('/toggle/:id', async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    task.status = !task.status;
    await task.save();
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Error updating task', error: err });
  }
});

/* DELETE task */
router.get('/delete/:id', async (req, res, next) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).render('error', { message: 'Error deleting task', error: err });
  }
});

module.exports = router;
