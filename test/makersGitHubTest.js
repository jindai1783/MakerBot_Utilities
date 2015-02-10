var chai = require('chai');
var phantom = require('phantomjs');
var expect = chai.expect;
var MakersGitHub = require('../makersGitHub.js');

describe('Makers GitHub', function() {

  it('should pass', function() {
    var makers = new MakersGitHub();
    expect(makers.repo).to.not.equal(null);
  });

  it('should read a file from Makers GitHub', function() {
    var makers = new MakersGitHub();

    makers.readFileInfo('.gitignore', function(data) {
      expect(data).to.contain('Store');
      done();
    })
  });


});