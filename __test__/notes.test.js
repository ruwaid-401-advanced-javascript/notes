'use strict';

const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes Module', ()=> {

  it('execute() with wrong method', () =>{
    let options = new Notes();
    let input ={method:'method error: i cant read your mind man :P write the method u want to use'};
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() without msg', () =>{
    let options = new Notes();
    let input ={method:'msg error: ops u forget to write msg'};
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  it('execute() with correct method and a msg', () =>{
    let options = new Notes();
    let input ={method:{action: 'add', payload: 'hiii'}};
    options.execute(input);
    expect(console.log).toHaveBeenCalled();
  });

  // it('add() with correct method and a msg', () =>{
  //   let options = new Notes();
  //   let input ={method:{action: 'add', payload: 'hiii'}};
  //   options.add(input);
  //   expect(console.log).toHaveBeenCalled();
  // });

});
