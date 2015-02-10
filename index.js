var Github = require('github-api')
var github = new Github({
  username: "ddemkiw",
  password: "Micheline01",
  auth: "basic"
});

function MakersGithub(){
  this.repo = github.getRepo('makersacademy', 'course');

}

MakersGithub.prototype.readFileInfo = function(file) {

};

repo.contents('master', "https://github.com/ddemkiw/BowlingScorecard/blob/master/index.html", function(err, contents) {}, sync=true);

repo.contents('master', "https://github.com/ddemkiw/BowlingScorecard", function(err, contents) {console.log(contents)}, sync);

repo.read('master', 'intro.md', function(err, data) {OneToOne.translate});