const express = require('express');
const router = express.Router();

const Task = require('../models/task');


router.get('/', async (req, res) => {
    //res.send(   'Hello World');
    //Task.find(function (err,tasks)  {
    //    console.log(tasks)
    //});
    const tasks = await  Task.find();

    res.json(tasks);
    //res.json({status: 'Api Works!'});
});


router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const {title, description} = req.body;
    const task = new Task({
        title: title,
        description: description
    })
    await task.save();
    console.log(task)
    res.json({status: 'Task save!'})
});


router.put('/:id', async (req, res) => {
    const {title, description} = req.body;
    const newTask = {title, description};
    console.log(req.params.id)
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json('Update successful');
});


router.delete('/:id', async (req, res) => {
    const {title, description} = req.body;
    const newTask = {title, description};
    console.log(req.params.id)
    await Task.findByIdAndRemove(req.params.id, newTask);
    res.json('Delete successful');
});


module.exports = router;