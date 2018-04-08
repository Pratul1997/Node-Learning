const fs=require('fs');
const _=require('lodash');
const yargs =require('yargs');


const notes=require('./notes.js');

const titleOptions={
	describe:'First Name of Wrestler',
	demand:true,
	alias: 't'
}

const bodyOptions={
	describe:'Second Name of Wrestler',
	demand:true,
	alias:'b'	
}

const argv=yargs
.command('add','Add a new Wrestler Name',{
	title: titleOptions,
	body:bodyOptions
})
.command('list','Listing all the notes')
.command('remove','Removing a note',{
	title: titleOptions
})
.command('read','Reading a specific Note',{
	title: titleOptions
})
.help()
.argv;

const command=process.argv[2];
// console.log("Command:",command);
// console.log('Process',process.argv);
// console.log('Yargs',argv);

if(command==='add'){
	var note=notes.addNote(argv.title,argv.body);
	if(note){
		console.log('Note created');
		console.log(`Title: ${note.title} and body: ${note.body}`);
	}
	else{
		console.log("Indentity created previously");
	}

}

 else if(command==='list'){
	var allNotes=notes.getAll();
	console.log(`Printing ${allNotes.length} notes.`);
	allNotes.forEach((note) =>{
		console.log(`Title: ${note.title} and body: ${note.body}`);
	});

}

 else if(command==='read'){
 	var readNote=notes.read(argv.title);
	if(readNote.length>0){
		console.log(`The Title is: ${readNote[0].title} and body is: ${readNote[0].body}`);
	}
	else{
		console.log("No such note exits to read");
	}
}

 else if(command==='remove'){
	console.log(notes.removeAll(argv.title)?"Note removed":"No such note existed");
}

 else{
	console.log("Undefined input:");
}













// const os= require('os');
// var user=os.userInfo();

// console.log(_.isString("Hulk"));
// console.log(_.uniq([2, 1, 2]));
// console.log(notes.addNotes());
// console.log("Result:",notes.sum(5,56));

// fs.appendFile('greeting.txt', `Hello ${user.username}!`, (err) => {
//   if (err) throw err;
// }); 