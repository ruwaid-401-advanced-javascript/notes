#!/usr/bin/env node
'use strict';

/**
 * Simple Server
 * @module index
 * @global
 */

/**
 * <pre>
 * this program can implemnt the CRUD methods
 * Do You need help? type `--help` in the command line to see help section
 * to run this file you need to specify the method you want to use
 * add to database -->  node index.js --add <your note> --category <category name>
 * list all data in  the database --> node index.js --list
 * list specific category --> node index.js --list <category name>
 * update notes --> node index.js --update <note ID> --newnote <your new note>
 * delete notes --> node index.js --delete <note ID>
 * you can use shortcut for the arguments --> add: a, list: l, update: u, delete: d , category: c, newnote: n
 * to see the full documentation type --> `node index.js --documentation` OR `node index.js --doc`
 * </pre>
 */
const Input = require('./lib/input');
const Notes = require('./lib/notes');
const mongoose = require('mongoose');

const express = require('express');
const app = express();
app.use('/', express.static('./docs'));

// connecting to my DB 
const MONGOOSE_URI = process.env.MONGOOSE_URI || 'mongodb://localhost:27017/notes';
// mongo docs says to stick to this
mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

// connect database with a callback function
// mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () =>{
//   console.log('Database is connected');
// }); 


/**
 * / All Programe (All Routes)
 * run all functions inside it
 */

/**
* allPrograme - run all functions inside it
* @function allPrograme
* @async
*/
async function allPrograme() {
  const arg = new Input();
  const note = new Notes();
  if (arg.action === 'server') serverUp();
  else {
    await note.execute(arg);
    mongoose.disconnect();
  }

}

allPrograme();

/**
* serverUp - will start the server to show the documentation
* @function serverUp
*/
function serverUp() {
  mongoose.disconnect();
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log('server up at PORT', PORT);
    console.log(`please open your browser @ PORT ${PORT} to see the documentation`);
  });
}
