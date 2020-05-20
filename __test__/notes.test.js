'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

// require('@code-fellows/supergoose');
// // const NotesColection = require('../models/notes-collection');
// // const notesColection = new NotesColection();
// const notesColection = new Notes();

// describe('Notes Model', () => {
//   it('can create() a new note item ', () => {
//     // let obj = { text: 'test note 1', category: 'school' };
//     let obj =  { method: { action: 'add', payload: 'hiii', category: 'school' } };
//     return notesColection.add(obj)
//       .then(record => {
//         Object.keys(obj).forEach(key => {
//           expect(record[key]).toEqual(obj[key]);
//         });
//       });
//   });

// });



describe('Notes Module', () => {

  it('execute() with wrong method', () => {
    let options = new Notes();
    let input = { method: 'method error: i cant read your mind man :P write the method u want to use' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() without msg', () => {
    let options = new Notes();
    let input = { method: 'msg error: ops u forget to write msg' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with correct method and a msg', () => {
    let options = new Notes();
    let input = { method: { action: 'add', payload: 'hiii' } };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with delete method ', () => {
    let options = new Notes();
    let input = { method: { action: 'delete', id: '5ec42429d7c4e1070fc613c6' } };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with list method ', () => {
    let options = new Notes();
    let input = { method: { action: 'list', category: 'school' } };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('add() with correct method and a msg', () => {
    let options = new Notes();
    let input = { method: { action: 'add', payload: 'hiii', category: 'school' } };
    options.add(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('delete()', () => {
    let options = new Notes();
    let input = { method: { action: 'delete', id: '5ec42429d7c4e1070fc613c6' } };
    options.delete(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('update()', () => {
    let options = new Notes();
    let input = { method: { action: 'update', payload: 'test new msg', id: '5846845154987' } };
    options.update(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('list()', () => {
    let options = new Notes();
    let input = { method: { action: 'list', category: true } };
    options.list(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('list()', () => {
    let options = new Notes();
    let input = { method: { action: 'list', category: 'school' } };
    options.list(input);
    expect(console.log).toHaveBeenCalled();
  });


  it('displayStyle()', () => {
    let options = new Notes();
    let input = [{ text: 'hii', category: 'school', _id: '5ec42429d7c4e1070fc613c6' }];
    options.displayStyle(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('displayStyle()', () => {
    let options = new Notes();
    let input = '';
    options.displayStyle(input);
    expect(console.log).toHaveBeenCalled();
  });
});
