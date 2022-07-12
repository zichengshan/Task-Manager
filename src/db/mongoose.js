const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Invalid email address.')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if(value < 0){
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const user = new User({
    name: 'Zicheng',
    email: 'zicheng@gmail.com'
})

user.save().then((result) => {
    console.log('Success')
}).catch((error) => {
    console.log('Failure')
})

// const task = new Task({
//     description: 'Leetcode Questions',
//     completed: true
// })

// task.save().then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log('Error')
// })