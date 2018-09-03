var express = require('express');
var router = express.Router();
const imdbMovies = require("imdb-movies")


router.get('/',(req,res)=>{
  res.render('index')
});

router.get('/hollywood',(req,res)=>{
  res.render('hollywood')
});

router.get('/bollywood',(req,res)=>{
  res.render('bollywood')
});

router.get('/tollywood',(req,res)=>{
  res.render('tollywood')
});



router.get('/api/hollywood', (req,res)=>{
  googleNews
 .search('hollywood descriptionjs')
 .then(resp => res.json(resp));
})

router.get('/api/bollywood', (req,res)=>{
  googleNews
 .search('bollywood js')
 .then(resp => res.json(resp));
})

router.get('/api/tollywood', (req,res)=>{
  googleNews
 .search('tollywood js')
 .then(resp => res.json(resp));
})

module.exports = router;