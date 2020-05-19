'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {

  it('execute() with wrong method', () =>{
    new Notes({method:'method error: i cant read your mind man :P write the method u want to use'});
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() without msg', () =>{
    new Notes({method:'msg error: ops u forget to write msg'});
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with correct method and a msg', () =>{
    new Notes({method:{action: 'add', payload: 'hiii'}});
    expect(console.log).toHaveBeenCalled();
  });

});
