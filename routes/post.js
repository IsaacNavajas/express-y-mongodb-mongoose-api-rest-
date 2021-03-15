const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js');


router.get('/all', async (req, res) =>{
    try{
        const posts = await Post.find();
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
});

router.get('/productos/:id', async (req, res) =>{
    try{
        const posts = await Post.findById(req.params.id);
        res.json(posts)
    }catch(err){
        res.json({message: err})
    }
});

router.post('/add',  async (req, res) => {
    const onePost = new Post({
        producto: req.body.producto,
        precio: req.body.precio
    });
    console.log(req.body)
    try{
        const save = await onePost.save();
        res.json(save);
    }catch(err){
        res.json({message: err})
    }
})

router.delete('/productos/:id', async (req, res) =>{
   try{
    const removed = await Post.deleteOne({_id: req.params.id});
    res.json(removed)
    }catch(err){
        res.json({message: err})
    }   
});

router.put('/update/:id', async (req, res) =>{
    try{
        const updatePosts = await Post.updateOne(
            { _id: req.params.id }, 
            { $set: {
                producto: req.body.producto,
                precio: req.body.precio
            } }
        );
        res.json(updatePosts)
    }catch(err){
        res.json({message: err})
    }
});





module.exports=router;