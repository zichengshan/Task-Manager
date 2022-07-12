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
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

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

const user = new User({
    name: 'Zicheng',
    email: 'zichengshan@gmail.com',
    age: 17,
    password: '2342352421'
})

user.save().then((result) => {
    console.log('Success')
}).catch((error) => {
    console.log(error)
})

const task = new Task({
    description: 'Input for testing.'
})

task.save().then((result) => {
    console.log(result)
}).catch((error) => {
    console.log('Error')
})