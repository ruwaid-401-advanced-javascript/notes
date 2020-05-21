'use strict';

require('@code-fellows/supergoose');

const Note = require('../models/notes-collection');
const note = new Note();

describe('note Model', () => {
  it('can create() a new food item ', () => {
    let obj = { text: 'test text 1', category: 'school test' };
    return note.create(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get(category) a note item', () => {
    let obj = { text: 'test text 1', category: 'school test' };
    // return note.create(obj)
    // .then(record => {
    return note.get(obj.category)
      .then(item => {
        // console.log(item);
        // console.log( Object.keys(obj));
        Object.keys(obj).forEach(key => {
          // console.log(key,item[0][key],obj[key]);
          expect(item[0][key]).toEqual(obj[key]);
        });
      });
    // });
  });

  it('can get() a note item()', () => {
    let obj = { text: 'test text 2', category: 'tesla test' };
    return note.create(obj)
      .then(record => {
        return note.get()
          .then(item => {
            console.log(item);
            Object.keys(obj).forEach(key => {
              item.forEach(e => {
                expect(e[key]).toEqual(key);
              });
            });
          });
      });
  });

});