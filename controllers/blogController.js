const Blog=require('../models/blogModel')


const getAllBlog=async(req,res)=>{
    try{
        let data=await Blog.find({},{_id:1,title:1});
        res.send(data);
    }catch(err){
        res.send(err);
    }
}

const addBlog=async(req,res)=>{
    try{
        let data=await Blog.create(req.body);
        res.send(data);

    }catch(err){
        res.send(err);
    }
}

const getBlog=async(req,res)=>{
    try{
        let id=req.params.id;
        console.log(id)
        let data=await Blog.findById({_id:id});
        res.send(data);
    }catch(err){
        res.send(err);
    }
}

const deleteBlog=async(req,res)=>{
    try {
        
        let data=await Blog.findByIdAndRemove(req.params.id)
        res.send(data);
    } catch (err) {
        res.send(err);
    }
}

module.exports={
    getAllBlog,
    addBlog,
    getBlog,
    deleteBlog

}