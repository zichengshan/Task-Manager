const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// const user = new User({
//     name: 'Zicheng',
//     email: 'zichengshan@gmail.com',
//     age: 17,
//     password: '2342352421'
// })

// user.save().then((result) => {
//     console.log('Success')
// }).catch((error) => {
//     console.log(error)
// })

// const task = new Task({
//     description: 'Input for testing.'
// })

// task.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log('Error')
// })