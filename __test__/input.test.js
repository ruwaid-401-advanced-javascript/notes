'use strict';

const Input = require('../lib/input.js');

describe('Input Module', () => {

  it('getMethods() with wrong input (when there is no method or invalid)', () => {
    let options = new Input();
    expect(options.getMethod('')).toEqual('method error: i cant read your mind man :P write the method u want to use');
    expect(options.getMethod('-b')).toEqual('method error: i cant read your mind man :P write the method u want to use');
  });

  it('getMethods() with correct method but without msg', () => {
    let options = new Input();
    expect(options.getMethod({ a: true })).toEqual('msg error: ops u forget to write msg');
  });

  it('getMethods() with correct method and a msg', () => {
    let options = new Input();
    expect(options.getMethod({ a: 'hiii' })).toEqual({ action: 'add', payload: 'hiii' });
    expect(options.getMethod({ add: 'woow' })).toEqual({ action: 'add', payload: 'woow' });
    expect(options.getMethod({ delete: '5846845154987' })).toEqual({ action: 'delete', id: '5846845154987' });
    expect(options.getMethod({ list: true })).toEqual({ action: 'list', category: true });
    expect(options.getMethod({ d: '5846845154987' })).toEqual({ action: 'delete', id: '5846845154987' });
    expect(options.getMethod({ l: true })).toEqual({ action: 'list', category: true });
    expect(options.getMethod({ update: '5846845154987',m:'test new msg' })).toEqual({ action: 'update', payload: 'test new msg', id: '5846845154987' });
  });

  it('getMsg() without a msg', () => {
    let options = new Input();
    expect(options.getMsg(true)).toEqual('msg error: ops u forget to write msg');
  });

  it('getMsg() without a msg', () => {
    let options = new Input();
    expect(options.getMsg()).toEqual('msg error: ops u forget to write msg');
  });

  it('getMsg() with a msg', () => {
    let options = new Input();
    expect(options.getMsg('woow')).toEqual({ action: 'add', payload: 'woow' });
  });

  it('newMsg() with a new msg', () => {
    let options = new Input();
    expect(options.newMsg('test new msg','5846845154987')).toEqual({ action: 'update', payload: 'test new msg', id: '5846845154987' });
    expect(options.newMsg()).toEqual('msg error: ops u forget to write the new msg');
  });
  
});
