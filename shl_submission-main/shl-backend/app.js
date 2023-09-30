const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const URL = 'mongodb+srv://yuktisachdevawork:mAVN1HozMZFrSSD8@cluster0.dukr2qs.mongodb.net/shl?retryWrites=true&w=majority'

const app = express()

app.use(cors())
app.use(express.json());
app.use("/", require("./routes/router"));

try{
    mongoose.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('MongoDB connected successfully');
}catch(err){
    console.log('MongoDB connection error', err)
}

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})