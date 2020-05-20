'use strict';

const NotesColection = require('../models/notes-collection');
const notesColection = new NotesColection();

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
    await notesColection.create(entry);
  }

  async delete(DataToDelete) {
    console.log('Deleted Note ', DataToDelete.method.id);
    await notesColection.delete(DataToDelete.method.id);
  }

  async list(categoryToList) {
    let needToTest = categoryToList.method.category;
    let data = needToTest !== true ? await notesColection.get(needToTest) : await notesColection.get();  
    this.displayStyle(data);
  }

  displayStyle(data) {
    if(data.length){
      data.forEach(e => {
        console.log();
        console.log(e.text);
        console.log('Category:', e.category, 'ID:', e._id);
        console.log('-----------------------------------');
      });
    }else{
      console.log('No data find');
    }
  }

}

module.exports = Notes;
