// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');


	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b0af2e5b07af46dd3cfa0c4')
	},{
		$set:{
			location:'Bangaluru'
		},
		$inc:{
			 age:10 
		} 
	},{
		returnOriginal:false
	}).then((result)=>{
		console.log(result)
	});

	// db.close();
});