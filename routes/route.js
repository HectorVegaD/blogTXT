const express = require('express');
const router = express.Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb://Hector:Hector@ds223760.mlab.com:23760/txtbloglist_hector');

//Retrieve list of all Blogs
router.get('/blogs', (req, res, next) => {
    db.blogs.find(function(err, blogs){
        if(err){
            res.send(err);
        } //If there is an error, send the error
        res.json(blogs);
    });
});

// Retreive Single Blog

router.get('/blog/:id', (req, res, next) => {
    db.blogs.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, blog){
        if(err){
            res.send(err);
        } //If there is an error, send the error
        res.json(blog);
    });
});


// Save Blog
router.post('/blog', function(req, res, next){
    var blog = req.body;
    if(!blog.title || !blog.author || !blog.content ){
        res.status(400);
        res.json({
            "error": "Bad Data"
        });
    } else {
        db.blogs.save(blog, function(err, blog){
            if(err){
                res.send(err);
            }
            res.json(blog);
        })
    }
});

module.exports = router;