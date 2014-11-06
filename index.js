var fs = require('fs');
var join = require('path').join;
var ini = require('ini');
var regexp = require('github-url-from-git').re;

module.exports = getRepo;

function getRepo(raw){
  if (typeof raw != 'string') raw = raw.toString();
  var config = ini.parse(raw);
  var origin = config['remote "origin"'].url;
  var m = regexp.exec(origin.replace(/\.git(#.*)?$/, ''));
  var path = m[2];
  var segs = path.split('/');
  return {
    account: segs[0],
    repo: segs[1],
    path: path
  };
}

