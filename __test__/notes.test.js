'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', () => {

  it('execute() with  error', () => {
    let options = new Notes();
    let input = { action: 'add', category: undefined, id: undefined, payload: 'test note 2', error: 'forget to add category' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with  add  method and a msg', () => {
    let options = new Notes();
    let input = { action: 'add', payload: 'hiii' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with delete method ', () => {
    let options = new Notes();
    let input = { action: 'delete', id: '5ec42429d7c4e1070fc613c6' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with update method ', () => {
    let options = new Notes();
    let input = { action: 'update', payload: 'hiii', id: '5ec42429d7c4e1070fc613c6' };
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with list method ', () => {
    let options = new Notes();
    let input = { action: 'list', category: 'school' };
    options.execute(input);
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    }, 500);
  });

  it('add() with correct method and a msg', () => {
    let options = new Notes();
    let input = { action: 'add', payload: 'hiii', category: 'school' };
    options.add(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('delete()', () => {
    let options = new Notes();
    let input = { action: 'delete', id: '5ec42429d7c4e1070fc613c6' };
    options.delete(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('update()', () => {
    let options = new Notes();
    let input = { action: 'update', payload: 'test new msg', id: '5846845154987' };
    options.update(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('list() all notes', () => {
    let options = new Notes();
    let input = { method: { action: 'list', category: true } };
    options.list(input);
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    }, 500);
  });

  it('list() one category', () => {
    let options = new Notes();
    let input = { method: { action: 'list', category: 'school' } };
    options.list(input);
    setTimeout(() => {
      expect(console.log).toHaveBeenCalled();
    }, 500);
  });

  it('displayStyle()', () => {
    let options = new Notes();
    let input = [{ text: 'test hii', category: 'school', _id: '5ec42429d7c4e1070fc613c6' }];
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
