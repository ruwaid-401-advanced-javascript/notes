'use strict';

const NotesSchema = require('../models/notes-schema');

class Notes {
  constructor(operation) {
    this.execute(operation);
  }

  execute(operation) {
    console.log(operation);
    if (operation.method.action === 'list') return this.list(operation);
    if (operation.method.action === 'add') return this.add(operation);
    else { console.log(operation.method); }
  }

  add(operation) {
    this.msg = operation.method.payload;
    this.id = parseInt(Math.random() * 1000000000000);
    console.log('msg=', this.msg, ' ', 'ID=', this.id);
    this.save(this.msg);
  }
  async save(msg) {
    let entry = {
      text: msg,
      category: 'hi',
    };

    let food = new NotesSchema(entry);
    await food.save();
  }
  // delete(id){

  // }

  async list(categoryToList){
    console.log(categoryToList,'yyyyyyyyyyyyyyyyyy',categoryToList.method.category);
    let needToTest = categoryToList.method.category;
    // let data = needToTest? await NotesSchema.find({category:`categoryToList`}):await NotesSchema.find({});
    // console.log(data);
    let x = await NotesSchema.find({});
    console.log(x,'pp');
    // return data;
  }
}

module.exports = Notes;
