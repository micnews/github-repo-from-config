var getRepo = require('./');
var test = require('tape');

test('ssh', function(t){
  var config = '[remote "origin"]\n\turl = git@github.com:user/repo.git';
  t.deepEqual(getRepo(config), {
    account: 'user',
    repo: 'repo',
    path: 'user/repo'
  });
  t.end();
});

test('https', function(t){
  var config = '[remote "origin"]\n\turl = https://github.com/user/repo.git';
  t.deepEqual(getRepo(config), {
    account: 'user',
    repo: 'repo',
    path: 'user/repo'
  });
  t.end();
});

test('buffer', function(t){
  var config = '[remote "origin"]\n\turl = https://github.com/user/repo.git';
  t.deepEqual(getRepo(Buffer(config)), {
    account: 'user',
    repo: 'repo',
    path: 'user/repo'
  });
  t.end();
});

