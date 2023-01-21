const express=require('express')
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
const app=express()
const blogRoutes=require('./routes/blogRoutes')
require('dotenv').config();

const mongoDB_URI=process.env.mongoDB_URI

mongoose.connect(mongoDB_URI,{ useNewUrlParser: true })

const db=mongoose.connection
db.on('error',console.error.bind(console,'connextion error:'))
db.once('open', function(){
console.log('Connection to DB')
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)

const cors = require('cors');
app.use(cors());

app.use('/blog',blogRoutes)

const PORT=process.env.PORT||8000;

app.listen(PORT,()=>{
console.log(`Server Listening to ${PORT}`)
})