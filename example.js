var parse = require('./');
var fs = require('fs');

var config = fs.readFileSync('.git/config');
var info = parse(config);
console.log(info);
