module.exports = function (grunt) {

  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: './public/javascripts',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanTargetDir: true,
          cleanBowerDir: false
        }
      }
    },
    pkg: grunt.file.readJSON('package.json'),
    develop: {
      server: {
        file: 'app.js'
      }
    },
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: [
          'app.js',
          'routes/*.js'
        ],
        task: "develop",
        options: {
          debounceDelay: true,
        }
      },
      js: {
        files: ['public/javascripts/*.js'],
      },
      css: {
        files: ['public/stylesheets/*.css'],
      },
      jade: {
        files: ['views/*.jade'],
      }
    }
  });
  grunt.registerTask('delayed-livereload', 'delayed livereload', function () {
    var done = this.async();
    setTimeout(function () {
      grunt.task.run('livereload');
      done();
    }, 500);
  });
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-develop');
  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-livereload');

  grunt.registerTask('default', ['livereload-start', 'develop', 'regarde']);
};
