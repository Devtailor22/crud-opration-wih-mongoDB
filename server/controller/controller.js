var userDB = require('../model/model');


// create and save new user

exports.create = (req,res)=>{
	if(!req.body){
		res.status(400).send({ massage:"field cant be empty " });
		return;
	}

	const user = new userDB({
		name:req.body.name,
		email:req.body.email,
		gender:req.body.gender,
		status:req.body.status
	})

	user
		.save(user)
		.then(data=>{
				res.redirect('/');
		})
		.catch(err=>{
			res.status(500).send({
				massage:err.massage || "some error in createing"
			})	
		})
}

// show all user
exports.find = (req,res)=>{
	userDB.find()
	.then(data=>{
		res.send(data);
		
	})
	.catch(err=>{
			res.status(500).send({
				massage:err.massage || "some error in fnding"
			})	
		})
}

// fatch data for update

exports.fatch = (req,res)=>{
	const upeid=req.params.id;
	userDB.findById(upeid)
	.then(data=>{
		res.render('upe-user',{ data });
		console.log(data);
	})
	.catch(err=>{
			res.status(500).send({
				massage:err.massage || "some error in fnding"
			})	
		})
}


// update user
exports.update = (req,res)=>{
	if(!req.body){
		return res
			.status(400)
			.send({ massage:"data not found" })
	}
	const id = req.params.id;
	userDB.findByIdAndUpdate(id,req.body,{useFindAnfModify:false})

		.then(data=>{
		
					res.redirect('/');
				
					})
					.catch(err=>{
						res.status(500).send({  massage:"err" })
					})
				}

// delete user
exports.delete = (req,res)=>{
	const id = req.params.id;
	userDB.findByIdAndDelete(id)

		.then(data=>{
		
				res.redirect('/');
				
				
					})
					.catch(err=>{
						res.status(500).send({  massage:"err" })
					})
				
}
