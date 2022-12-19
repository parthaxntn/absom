const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017/absom'

const connectToMongo = async () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('Connect to mongo successful');
    })
}

module.exports = connectToMongo