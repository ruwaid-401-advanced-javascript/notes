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
    return note.get(obj.category)
      .then(item => {
        Object.keys(obj).forEach(key => {
          expect(item[0][key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a note item()', () => {
    let obj = { text: 'test text 2', category: 'tesla test' };

    let allObjects = [{ text: 'test text 1', category: 'school test' },
      { text: 'test text 2', category: 'tesla test' },
    ];

    return note.create(obj)
      .then(() => {
        return note.get()
          .then(items => {
            allObjects.forEach((e, idx) => {
              Object.keys(obj).forEach(key => {
                expect(items[idx][key]).toEqual(e[key]);
              });
            });
          });
      });
  });

  it('can update(id,text) a note item', () => {
    let obj = { text: 'test text 3', category: 'javascript test' };
    let text = 'test new text updated';
    let objAfterUpdate = { text: text, category: 'javascript test' };
    return note.create(obj)
      .then(createdItem => {
        let id = createdItem._id;
        return note.update(id, text)
          .then(() => {
            return note.get(objAfterUpdate.category)
              .then(item => {
                Object.keys(obj).forEach(key => {
                  expect(item[0][key]).toEqual(objAfterUpdate[key]);
                });
              });
          });
      });
  });

  it('can delete() a new food item ', () => {
    let obj = { text: 'test text 4', category: 'corona test' };
    return note.create(obj)
      .then(record => {
        let itemId = record._id;
        return note.delete(itemId)
          .then(() => {
            return note.get()
              .then(items => {
                items.forEach(e => {
                  Object.keys(obj).forEach(key => {
                    expect(e[key]).not.toEqual(obj[key]);
                  });
                });
              });
          });


      });
  });
});

