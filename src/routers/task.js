const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)
    try {
        await task.save()
        res.status(201).send(task)
    } catch(err){
        res.status(400).send(err)
    }
})

router.get('/tasks', async (req, res) =>{

    const tasks = await Task.find({})

    try {
        res.send(tasks)
    } catch(err){
        res.status(500).send(err)
    }
})

router.get('/tasks/:id',  async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById(_id)
        if (!task){
            res.status(404).send()
        }
        res.send(task)
    } catch(err){
        res.status(500).send(err)
    }
})

router.patch('/tasks/:id', async (req, res) =>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ["description", "completed"]
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send('error: invalid updates')
    }
    
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        // const task = await Task.findById(req.params.id)
        // updates.forEach((update) => task[update] = req.body[update])
        // await task.save()

        if(!task){
            res.status(404).send('error: no task found')
        }

        res.send(task)
    } catch(err){
        res.status(400).send(err)
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if(!task){
            return res.status(404).send()
        }

        res.send(task)
    } catch(err){  
        res.status(500).send(err)
     }
})

module.exports = router