'use strict';
const Input = require('./lib/input');
const Notes = require('./lib/notes');
// const mongoose = require('mongoose');
// const NotesSchema = require('./models/notes-schema');

// // connecting to my DB 
// const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
// // mongo docs says to stick to this
// mongoose.connect(MONGOOSE_URI, {userNewUrlParse: true, useUnifiedTopology: true} );


const arg = new Input();
// eslint-disable-next-line no-unused-vars
const note = new Notes(arg);

