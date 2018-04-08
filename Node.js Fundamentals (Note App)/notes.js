const fs=require('fs');

var fetchNotes =() =>{
	try{
		var noteString=fs.readFileSync('notes-data.json');
		return notes=JSON.parse(noteString);
	}
	catch(e){
		return [];
	}
};

var saveNotes=(notes) =>{
	fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
	var notes=fetchNotes();
	var note={
		title,
		body
	};

	var duplicateNotes=notes.filter((note) => {
		return note.title === title;
	});

	if(duplicateNotes.length===0){
		notes.push(note);
		saveNotes(notes);
		return note;
	}	
};


var getAll = () => {
	return fetchNotes();
};

var read = (title) => {
	var notes=fetchNotes();
	var FilterNoteRead=notes.filter((note) => {
		return note.title === title;
	});
	return FilterNoteRead;
};

var removeAll = (title) => {
	var notes=fetchNotes();
	var FilterNotes=notes.filter((note) => {
		return note.title !== title;
	});
	saveNotes(FilterNotes);

	return notes.length!==FilterNotes.length;
};

module.exports={
	addNote,
	getAll,
	read,
	removeAll
};



















// module.exports.addNotes = () => {
// 	console.log('Function called'); 
// 	return '12';
// };
// module.exports.sum = (a,b) => {
// 	return a+b;
// };