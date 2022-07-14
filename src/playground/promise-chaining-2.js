require('../db/mongoose')

const Task = require('../models/task')

// create deleteTaskAndCount as an async function
    // Accept id of task to remove
const deleteTaskAndCount = async (id) => {
    // use await to delete and count up incomplete tasks
    const task = await Task.deleteOne({_id: id})
    const count = await Task.countDocuments({completed: false})
    // return the count
    return count
}

deleteTaskAndCount('62cde04787a9de048217476d').then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
})