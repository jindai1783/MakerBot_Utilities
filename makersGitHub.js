var Github = require('github-api');
var fs = require('fs');
var github = new Github({
  username: "makersbot",
  password: '1qwerty',
  auth: "basic"
});

function MakersGitHub(){
  this.repo = github.getRepo('makersacademy', 'course');
}

MakersGitHub.prototype.readFileInfo = function(fileName, callback) {
  
  this.repo.read('master', fileName, function(err, data) {
    callback(data);
  });
};

MakersGitHub.prototype.readFileInfoSync = function(file) {
  var data = null;
  this.repo.contents('master', file, function(err, contents) {console.log(contents); return content}, sync=true);
  
  data = contents;
  return data;
};

module.exports = MakersGitHub;