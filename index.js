'use strict';

/**
 * Simple Server
 * @module index
 */

/**
 * this program can implemnt the CRUD methods
 * Do You need help? type --help  
 * to run this file you need to specify the method you want to use
 * add to database -->  node index.js --add <your note> --category <category name>
 * list all data in  the database --> node index.js --list
 * list specific category --> node index.js --list <category name>
 * update notes --> node index.js --update <note ID> --newnote <your new note>
 * delete notes --> node index.js --delete <note ID>
 * you can use shortcut for the arguments --> add: a, list: l, update: u, delete: d , category: c, newnote: n
 */

const Input = require('./lib/input');
const Notes = require('./lib/notes');
const mongoose = require('mongoose');


// connecting to my DB 
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
// mongo docs says to stick to this
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });


/**
 * / All Programe (All Routes)
 * run all functions inside it
 */

async function allPrograme() {
  const arg = new Input();
  const note = new Notes();
  await note.execute(arg);
  mongoose.disconnect();
}

allPrograme();
