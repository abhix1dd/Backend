const mongoose=require('mongoose')

const blogSchema=mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    image:{
        type:String
    }
})

module.exports =mongoose.model('Blog',blogSchema)