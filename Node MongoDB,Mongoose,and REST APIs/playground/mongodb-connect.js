// const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

var obj=new ObjectID();
console.log(obj);



// var user={name:'Pratul Kumar',age:20};
// var{name}=user;
// console.log(name);


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text:'Something to do',
	// 	completed:false

	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert Todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,4));
	// }); 

	// db.collection('Users').insertOne({
	// 	name:'Pratul Kumar',
	// 	age:20,
	// 	location:'Jaipur'
	// },(err,result)=>{
	// 	if(err){
	// 		return console.log('Unable to insert Todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
	// });

	db.close();
});