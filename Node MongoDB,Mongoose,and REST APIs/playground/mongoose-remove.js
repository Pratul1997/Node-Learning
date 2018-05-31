const {ObjectID}=require('mongodb');
const {mongoose}=require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


// Todo.remove({}).then((result)=>{
// 	console.log(result);
// });

Todo.findOneAndRemove({"text" : "Food Eaten exist"}).then((result)=>{
	console.log(result);
});

// Todo.findByIdAndRemove('5b0bad8b9bc8a897580f6d62').then((todo)=>{
// 	console.log(todo);
// });