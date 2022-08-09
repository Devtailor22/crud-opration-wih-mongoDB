const LocalStrategy = require('passport-local');
var User = require('../model/login');

exports.doLogin = function(req, res) {
    passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      if (!user.verifyPassword(password)) { return done(null, false); }
      return done(null, user);
    });
  }
));

};


/*
// create and save new user

exports.create = (req, res, next)=>{
	
	if(!req.body){
		res.status(400).send({ massage:"field cant be empty " });
		return;
		}

	const newUser = new loginDB({
		 
    	 email :req.body.email,       
   		 pasword:loginDB.setPassword(req.body.password);
   		});
   		 
    // Initialize newUser object with request data
   
  
    // Save newUser object to database
    newUser.save((err, User) => {
        if (err) {
            return res.status(400).send({
                message : "Failed to add user."
            });
        }
        else {
            return res.status(201).send({
                message : "User added successfully."
            });
        }
    
});
   };

// show all user
exports.loginuser = (req, res) => {
  
    // Find user with requested email
    User.findOne({ email : req.body.email }, function(err, user) {
        if (user === null) {
            return res.status(400).send({
                message : "User not found."
            });
        }
        else {
            if (user.validPassword(req.body.password)) {
                return res.status(201).send({
                    message : "User Logged In",
                })
            }
            else {
                return res.status(400).send({
                    message : "Wrong Password"
                });
            }
        }
    });
};





*/