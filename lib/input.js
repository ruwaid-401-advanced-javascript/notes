
'use strict';

const minimist = require('minimist');

function Input() {
  const args = minimist(process.argv.slice(2));
  this.method = this.getMethod(args);
}

Input.prototype.getMethod = function (method) {
  if (method.a || method.add) return this.getMsg(method.a || method.add);
  else{ return 'method error: i cant read your mind man :P write the method u want to use'; }
};

Input.prototype.getMsg = function (msg = '') {
  if (msg !== true) return { action: 'add', payload: msg };
  else { return 'msg error: ops u forget to write msg'; }
};

module.exports = Input;
