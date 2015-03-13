var Github = require('github-api'); var github = new Github({username: "jindai1783",password: "xxxxxxxxxxxx",auth: "basic"});

function MakersGitHub(){
  this.repo = github.getRepo('makersacademy', 'course');
}

MakersGitHub.prototype.readFileInfo = function(fileName, callback) {
  
  this.repo.read('master', fileName, function(err, data) {
    if (err) throw err;
    callback(data);
  });
};

module.exports = MakersGitHub;