'use strict';
// implement the CRUD operations in food class.
// interface to communicate with food schema.
const schema = require('./notes-schema');

class NotesCRUD {

  constructor() {

  }

  async get(category) {
    // if you pass an id for me i will get you the record by id
    if (category) {
      //    return schema.findById(_id);
      return await schema.findOne({ category: category });
    } else {
      // else I think you mean to fetch everything
      return await schema.find({});
    }
  }

  async create(record) {
    let newRecord = new schema(record);
    return await newRecord.save();
  }

  async update(_id, record) {
    return await schema.findByIdAndUpdate(_id, record);
  }

  async delete(_id) {
    await schema.findByIdAndDelete(_id);
  }
}

module.exports = NotesCRUD;