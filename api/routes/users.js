var express = require('express');
var cors = require('cors')
var router = express.Router();
var userservices = require('../services/userservice');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/feedback',function(req,res,next){
	var obj={
		"feedback":req.body.feedback
	}
	console.log(obj);
	userservices.getFeedback(obj,res);
})
router.post('/create',function(req,res,next){

  var obj={
    "name":req.body.name,
    "email":req.body.email,
    "password":req.body.password,
    "collegename":req.body.collegename,
    "year":req.body.year,
    "branch":req.body.branch,
    "phone":req.body.phone


  }
  
  userservices.createUser(obj,res);
});

//Retrieve Data from data base
router.post('/retrieve',function(req,res,next){
	var obj ={
		"email":req.body.email,
		"password":req.body.password
	}
	userservices.getUser(obj,res);
});

router.post('/admin',function(req,res,next){
	var obj ={
		"email":req.body.email,
		
	}
	userservices.getAdmin(obj,res);
});

router.post('/pushevent',function(req,res,next){
	var obj ={
		"email":req.body.email,
		"event":req.body.event
	}
	userservices.pushEvent(obj,res);
});

router.post('/adminretrieve',function(req,res,next){
	var obj ={
		"email":req.body.email,
		"password":req.body.password,
		"role":"admin"
	}
	userservices.getAdmindet(obj,res);
});
router.post('/forgot',function(req,res,next){
	var obj ={
		"email":req.body.email
	}
	userservices.getPassword(obj,res);
});


module.exports = router;
