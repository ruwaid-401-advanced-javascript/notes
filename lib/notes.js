'use strict';

/**
 * Execute the commands that passed from input module 
 * @module notes
 */
require('colors');
const NotesColection = require('../models/notes-collection');
const notesColection = new NotesColection();

class Notes {
  constructor() {

  }

  async execute(operation) {
    if (operation.error) return console.log(operation.error.red);
    if (operation.action === 'add') return this.add(operation);
    if (operation.action === 'list') return this.list(operation);
    if (operation.action === 'delete') return this.delete(operation);
    if (operation.action === 'update') return this.update(operation);
  }

  async add(operation) {
    let entry = { text: operation.payload, category: operation.category };
    console.log('Note saved '.white, entry.text.blue);
    await notesColection.create(entry);
  }

  async delete(DataToDelete) {
    console.log('Deleted Note '.white, DataToDelete.id.blue);
    await notesColection.delete(DataToDelete.id);
  }

  async update(operation){
    let entry = { text: operation.payload, id: operation.id };
    console.log('note updated '.white, entry.text.blue);
    await notesColection.update(entry.id,entry.text);
  }

  async list(categoryToList) {
    let needToTest = categoryToList.category;
    let data = needToTest !== true ? await notesColection.get(needToTest) : await notesColection.get();  
    this.displayStyle(data);
  }
  /**
 * Display list - will display the note list 
 * @param data
 * @function displayStyle
 */
  displayStyle(data) {
    if(data.length){
      data.forEach(e => {
        console.log();
        console.log(e.text.cyan);
        console.log('Category:'.white, e.category.blue, 'ID:'.white, e._id);
        console.log('-----------------------------------'.gray);
      });
    }else{
      console.log('No data found');
    }
  }

}

module.exports = Notes;
