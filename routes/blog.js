const express = require('express')
const path = require('path')
const myblogs = require('../data/blogs.js');
const router = express.Router();


router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"../views/index.html"));
})

router.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname,"../views/bloghome.html"));
})

router.get('/blog/:slug',(req,res)=>{
    let a = myblogs.filter((e)=>{
      return e.slug == req.params.slug;
    })
    console.log(a);
    // res.sendFile(path.join(__dirname,"../views/blogpost.html"))
    res.render('home',{
      blogs : myblogs
    });
})

module.exports = router;