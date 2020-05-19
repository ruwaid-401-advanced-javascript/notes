'use strict';
const Input = require('./lib/input');
const Notes = require('./lib/notes');
const mongoose = require('mongoose');

// connecting to my DB 
const MONGOOSE_URI = 'mongodb://localhost:27017/notes';
// mongo docs says to stick to this
mongoose.connect(MONGOOSE_URI, { userNewUrlParse: true, useUnifiedTopology: true });

async function allPrograme() {
  const arg = new Input();
  const note = new Notes();
  await note.execute(arg);
  mongoose.disconnect();
}

allPrograme();
