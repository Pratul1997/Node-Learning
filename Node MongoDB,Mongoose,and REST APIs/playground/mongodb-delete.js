// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Users').deleteMany({age:15}).then((result)=>{
	// 	console.log(result);
	// });

	// db.collection('Users').deleteOne({age:20}).then((result)=>{
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndDelete({location:'Jaipur'}).then((result)=>{
		console.log(result);
	});


	// db.close();
});