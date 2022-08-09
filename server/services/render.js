const axios = require('axios');

exports.homeroutes=(req,res)=>{
	axios.get('http://localhost:3000/user')
	.then(function(response){
		console.log(response.data);
		res.render('index',{data:response.data});
	})
	
}
exports.adduser=(req,res)=>{
	res.render('add-user');
}