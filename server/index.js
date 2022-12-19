const connectToMongo = require('./db')
const express = require('express')


connectToMongo();
const port = 5000;
const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send('hello1')
})

app.use('/api/blog', require('./routes/blogs'));

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})
