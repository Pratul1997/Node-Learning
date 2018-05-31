var getUser=(id, call) => {
	var user={
		id: id,
		name:'Vikram'
	};
	setTimeout(() =>{
		call(user);
	},3000);
};

getUser(31,(user) =>{
	console.log(user);
});


