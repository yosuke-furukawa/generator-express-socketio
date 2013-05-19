/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('express socket.io generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('expressio:app', [
        '../../app',
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'Gruntfile.js',
      '.jshintrc',
      '.editorconfig',
      '.bowerrc',
      '.gitignore',
      'bower.json',
      'app.js',
      'public/images',
      'public/components',
      'public/javascripts',
      'public/stylesheets/style.css',
      'package.json',
      'routes/index.js',
      'routes/user.js',
      'views/index.jade',
      'views/layout.jade'
    ];
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFiles(expected);
      done();
    });
  });
});
