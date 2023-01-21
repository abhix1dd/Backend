const express=require('express');
const router=express.Router();

const {getAllBlog,addBlog,getBlog,deleteBlog}=require('../controllers/blogController')

router.use('/', (req,res,next)=>{
console.log("HIT");
next()
})

router.get('/',getAllBlog);

router.post('/addBlog',addBlog);

router.get('/:id',getBlog);

router.delete('/:id',deleteBlog);

module.exports = router ;