var Github = require('github-api');
var github = new Github({
  username: "makerbots",
  password: '1qwerty',
  auth: "basic"
});

function MakersGitHub(){
  this.repo = github.getRepo('makersacademy', 'course');
}

MakersGitHub.prototype.readFileInfo = function(fileName, callback) {
  
  this.repo.read('master', fileName, function(err, data) {
    if (err) throw err;
    console.log(data);
    callback(data);
  });
};

// MakersGitHub.prototype.readFileInfoSync ftion(file) {
//   var data = null;
//   this.repo.contents('master', file, function(err, contents) {console.log(contents); return content}, sync=true);
  
//   data = contents;
//   return data;
// };

module.exports = MakersGitHub;

// var makers = new MakersGitHub();
// makers.readFileInfo('.gitignore', function() {
//   console.log('hello')
// });