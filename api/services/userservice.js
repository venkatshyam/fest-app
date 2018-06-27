var DBModel = require('../public/models/db');
var eventModel=require('../public/models/db1');
var feedModel=require('../public/models/feedback');
var User = DBModel.User;
var Event=eventModel.Event;
var Feed=feedModel.Feed;
var nodemailer=require('nodemailer');

 var getFeedback = function(obj,res){
     var feed=new Feed();
     feed.feedback=obj.feedback;
     feed.save(function (err, data) {
        if (err) {
            console.log('Error in Registering user data: ' + err);
            throw err;
            res.send('failed');

        }
        var mailOptions = {
            from: 'theultimatedevloper@gmail.com',
            to: obj.email,
            subject: 'Feedback succeess',
            text: 'Thank You for ur feedback'
        };

        transporter.sendMail(mailOptions, function (error, data) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + data.response);
                res.send('Hey ' + obj.email + ' U are registered Successfully..!!');
                res.end();
            }
        });
        console.log(' Thank you for ur feedback ');
        res.json(' Thank you for ur feedback ');
     })
    }


//Insert User data in the database
var createUser = function (obj, res) {

    //Initializing DB Model Schema and assigning values to that schema
    var user = new User();
    user.name = obj.name;
    user.email = obj.email;
    user.password = obj.password;
    user.collegename = obj.collegename;
    user.year = obj.year;
    user.branch = obj.branch;
    user.phone = obj.phone;
    
  

    // Insert the Data
    user.save(function (err, data) {
        if (err) {
            console.log('Error in Registering user data: ' + err);
            throw err;
            res.send('failed');

        }
        console.log(' Registration successful');
        res.json(' Registration successful');


        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'theultimatedevloper@gmail.com',
                pass: 'shyamv1234'
            }
        });

        var mailOptions = {
            from: 'theultimatedevloper@gmail.com',
            to: obj.email,
            subject: 'Subscription Mail',
            text: 'Thanks for getting registered for our hungama app!! Get register for the evens in a single click!!'
        };

        transporter.sendMail(mailOptions, function (error, data) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + data.response);
                res.send('Hey ' + obj.email + ' U are registered Successfully..!!');
                res.end();
            }
        });
    });
}


    //Retrieve User Data from the database
    var getUser = function (obj, res) {
      console.log('sdfdf')
        var email = obj.email;
        var password = obj.password;

        // Get the user Details through UserName And Password - (Login)
        User.find({ email: email, password: password }, function (err, data) {
            if (err) {
                console.log('Error in Registering user data: ' + err);
                throw err;
                res.send('failed');

            }
            if(data.length>0)
            {
            console.log('Employee login succesful');
            res.send(data);
            }
            else{
                console.log('empty data')
                res.send("f");
            }
        });
    }

    var getAdmin = function (obj, res) {

       
        var a={
            _id : obj.email
        }

        // Get the user Details through UserName And Password - (Login)
        Event.find( a, function (err, data) {
            if (err) {
                console.log('Cant get ur data ' + err);
                throw err;
                res.send('failed');

            }
            console.log('Data retreived successfully',data);
            res.send(data);

        });
    }


    var pushEvent = function (obj, res) {

        //Initializing DB Model Schema and assigning values to that schema
        // var et = new Event();
        // et._id=obj.email;
        // et.events = obj.event;
        var a={
            _id : obj.email,
            events : obj.event
        }
        Event.create(a,function (err, data) {
            if (err) {
                console.log(err)
                Event.update({ _id: a._id }, { $push: { events: a.events } }, function (err, data) {
                    if (err) {
                        res.json({ "status": "notOk" })
                    }
                    else {
                        res.json({ "status": "ok" })

                 //sending mail
                 var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                      user: 'theultimatedevloper@gmail.com',
                      pass: 'shyamv1234'
                    }
                  });
                  
                  var mailOptions = {
                    from: 'theultimatedevloper@gmail.com',
                    to: obj.email,
                    subject: 'Subscription Mail',
                    text: 'Congrats your are registered for the event'+' '+a.events
                  };
                  
                  transporter.sendMail(mailOptions, function(error, data){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + data.response);
                       res.send('Hey '+obj.email+' U are registered Successfully..!!');
                       res.end();
                    }
                  });





                    }
                })
            }
            else {
                console.log(err)
                res.json({ "status": "ok" })
            }
        })
      
    
        // Insert the Data
        // user.save(function (err, data) {
        //     if (err) {
        //         console.log('Error in Registering user data: ' + err);
        //         throw err;
        //         res.send('failed');
    
        //     }
        //     console.log(' Registration successful');
        //     res.json(' Registration successful');
    
        // });
    }   

    
    var getAdmindet = function (obj, res) {

        var email = obj.email;
        var password = obj.password;
        var role=obj.role;
        // Get the user Details through UserName And Password - (Login)
        User.find({ "role": role, "password": password }, function (err, data) {
            if (err) {
                console.log('Error in Registering user data: ' + err);
                throw err;
                res.send('failed');

            }
            if(data.length>0)
            {
            //console.log('Employee login succesful');
            res.send(data);
            }
            else{
                res.send("f");
            }
        });
    }
      
    var getPassword = function (obj, res) {
        console.log('sdfdf')
                var email = obj.email;
               
        
                // Get the user Details through UserName And Password - (Login)
                User.find({ email: email,}, function (err, data) {
                    if (err) {
                        console.log('Error in Registering user data: ' + err);
                        throw err;
                        res.send('failed');
        
                    }
                    if(data.length>0)
                    {
                    console.log('  succesfully validated');
                    res.send(data);
                    var result=JSON.stringify(data);
                    var result1=data[0];

                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                          user: 'theultimatedevloper@gmail.com',
                          pass: 'shyamv1234'
                        }
                      });
                      
                      var mailOptions = {
                        from: 'theultimatedevloper@gmail.com',
                        to: obj.email,
                        subject: 'Subscription Mail',
                        text: 'Your Password is '+' '+result1.password
                      };
                      
                      transporter.sendMail(mailOptions, function(error, data){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + data.response);
                           res.send('Hey '+obj.email+' U are registered Successfully..!!');
                           res.end();
                        }
                      });




                    }
                    else{
                        console.log('empty data')
                        res.send("f");
                    }
                });
            }


     






 module.exports.createUser = createUser;
 module.exports.getUser = getUser;
 module.exports.getAdmin = getAdmin;
 module.exports.pushEvent=pushEvent;
 module.exports.getAdmindet=getAdmindet;
 module.exports.getPassword=getPassword;
 module.exports.getFeedback=getFeedback;