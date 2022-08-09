const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller')
const login = require('../controller/logincontroller')

route.get('/',services.homeroutes);
route.get('/add_user',services.adduser);

//api
route.post('/api/users',controller.create);
route.get('/user',controller.find);
route.get('/upe_user/:id',controller.fatch);
route.post('/api/users/:id',controller.update);
route.get('/api/del-users/:id',controller.delete);

//login api
var User = require('../model/login');


// User login api
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

// User signup api
route.post('/signup' login.doLogin);
route.get('/data', (req, res, next) => {
	

	User.find((err, User) => {
		if (err) {
			return res.status(400).send({
				message : "Failed to add user."
			});
		}
		else {
			return res.status(201).send({
				User
			});
		}
	});
});



module.exports = route;