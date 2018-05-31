// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);




MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Users').find({age:15}).toArray().then((docs)=>{
	// 	console.log('Users');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });

	// db.collection('Users').find({
	// 	_id:new ObjectID('5b0a936147f47a2d147c514d')
	// }).toArray().then((docs)=>{
	// 	console.log('Users');
	// 	console.log(JSON.stringify(docs,undefined,2));
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });

	// db.collection('Users').find().count().then((count)=>{
	// 	console.log(`Users count: ${count}`);
	// },(err)=>{
	// 	console.log('Unable to fetch todos',err);
	// });

	db.collection('Users').find({name:'Pratul Kumar'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs,undefined,2));
	},(err)=>{
		console.log('Unable to fetch todos',err);
	});

	db.collection('Users').find({name:'Pratul Kumar'}).count().then((count)=>{
		console.log(`Users count: ${count}`);
	},(err)=>{
		console.log('Unable to fetch todos',err);
	});
	// db.close();
});