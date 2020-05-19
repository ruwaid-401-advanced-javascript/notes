'use strict';

const NotesSchema = require('../models/notes-schema');

class Notes {
  constructor() {

  }

  async execute(operation) {
    if (operation.method.action === 'add') return this.add(operation);
    if (operation.method.action === 'list') return this.list(operation);
    if (operation.method.action === 'delete') return this.delete(operation);
    else { console.log(operation.method); }
  }

  async add(operation) {
    let entry = { text: operation.method.payload, category: operation.method.category };
    let newNote = new NotesSchema(entry);
    await newNote.save();
    console.log('note saved ', entry.text);
  }

  async delete(DataToDelete) {
    await NotesSchema.findByIdAndRemove(DataToDelete.method.id);
    console.log('Deleted Note ', DataToDelete.method.id);
  }

  async list(categoryToList) {
    // console.log(categoryToList, 'yyyyyyyyyyyyyyyyyy', categoryToList.method.category);
    let needToTest = categoryToList.method.category;
    let data = needToTest ? await NotesSchema.find({ category: needToTest }) : await NotesSchema.find({});
    console.log(data);
  }
}

module.exports = Notes;
