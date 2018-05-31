
const express=require('express');
const hbs=require('hbs');
const fs=require('fs');

var app=express(); 

const port=process.env.PORT || 3000;

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');

app.use((req,res,next)=>{
	var now=new Date().toString();
	var logcre=`${now}: ${req.method} ${req.url}`;
	console.log(logcre);
	fs.appendFile('Server.log',logcre+'\n',(err)=>{
		if(err){
			console.log('Unable to append to server.log');
		}
	});
	next();
})

// app.use((req,res,next)=>{
// 	res.render('maintainance.hbs');
// });


app.use(express.static(__dirname + '/hogan'));


hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
});
hbs.registerHelper('screamIt',(text)=>{
	return text.toUpperCase();
});


app.get('/',(req,res) => {
	res.render('home.hbs',{
		pageTitle:'Home Page', 
	}); 
});

app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		pageTitle:'About Page',
	});
});

app.get('/bad',(req,res)=>{
	res.send({
		errormessage:'It is a error'
	});
});


app.listen(port,()=>{
	console.log(`Server is up running on port_no ${port}`);
});