// CRUD create read update delete

// Connect to the database
const { MongoClient, ObjectId } = require('mongodb')

const id = new ObjectId()
console.log(id)
console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({
        _id: new ObjectId('62cbc3ab0fb77c021488d56c')
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
    
})