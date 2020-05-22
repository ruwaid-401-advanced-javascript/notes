'use strict';

/**
 * Read Input from terminal 
 * @module input
 */

const minimist = require('minimist');
require('colors');

class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.action = null;
    this.category = null;
    this.id = null;
    this.payload = null;
    this.error = null;
    this.getMethod(args);
  }

  /**
 * get Method - will change class variables values
 * @param arguments
 * @function getMethod
 */
  getMethod(method) {
    this.action = null;
    this.category = null;
    this.id = null;
    this.payload = null;
    this.error = null;
    if (method.help || method.h) return this.getHelp();
    if (method.a || method.add) this.action = 'add';
    if (method.list || method.l) this.action = 'list';
    if (method.update || method.u) this.action = 'update';
    if (method.delete || method.d) this.action = 'delete';

    this.category = method.category || method.c || method.list || method.l;
    this.id = method.delete || method.d || method.u || method.update;
    this.payload = method.a || method.add || method.n || method.newnote;

    if (this.action === 'add') {
      if (this.payload !== true) {
        if (!this.category || this.category === true) {
          this.isValid('categoryError');
        }
      } else {
        this.isValid('noteError');
      }
    }
    this.action ? null : this.isValid('methodError');
    return { action: this.action, category: this.category, id: this.id, payload: this.payload, error: this.error };
  }

  /**
 * is Valid - will assign the situation error message 
 * @param msgName
 * @function isValid
 */
  isValid(msgName) {
    let errors = {
      methodError: 'method error: i cant read your mind man :P write the method u want to use',
      noteError: 'note error: ops u forget to write note',
      categoryError: 'category error: forget to add category',
    };
    this.error = errors[msgName];
  }

  getHelp() {
    console.log('-------------------------------------------------'.gray);
    console.log(' HELP Section'.blue);
    console.log('this program can implemnt the CRUD methods'.magenta);
    console.log('to run this file you need to specify the method you want to use');
    console.log('add to database -->'.white, 'node index.js --add <your note> --category <category name>'.green);
    console.log('list all data in  the database -->'.white, ' node index.js --list'.green);
    console.log('list specific category -->'.white, 'node index.js --list <category name>'.green,'or','node index.js --list --category <category name>'.green );
    console.log('update notes -->'.white,'node index.js --update <note ID> --newnote <your new note>'.green);
    console.log('delete notes -->'.white,'node index.js --delete <note ID>'.green);
    console.log('you can use shortcut for the arguments -->'.white,'add: a, list: l, update: u, delete: d , category: c, newnote: n'.green);
    console.log('-------------------------------------------------'.gray);
  }
}

module.exports = Input;
