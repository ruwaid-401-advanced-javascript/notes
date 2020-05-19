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
    console.log('note saved ', entry.text);
    let newNote = new NotesSchema(entry);
    await newNote.save();
  }

  async delete(DataToDelete) {
    console.log('Deleted Note ', DataToDelete.method.id);
    await NotesSchema.findByIdAndRemove(DataToDelete.method.id);
  }

  async list(categoryToList) {
    let needToTest = categoryToList.method.category;
    let data = needToTest !== true ? await NotesSchema.find({ category: needToTest }) : await NotesSchema.find({});
    this.displayStyle(data);
  }

  displayStyle(data) {
    data.forEach(e => {
      console.log();
      console.log(e.text);
      console.log('Category:', e.category, 'ID:', e._id);
      console.log('-----------------------------------');
    });
  }

}

module.exports = Notes;
