'use strict';
module.exports = function(grunt) {
  // Project Configuration
  grunt.initConfig({
    concat: {
      dist: {
        src: ['vendor/backbone-1.3.3.js', 
              'vendor/jquery.ui.core.js',
              'vendor/jquery.ui.widget.js',
              'vendor/jquery.ui.position.js',
              'vendor/jquery.ui.menu.js',
              'vendor/jquery.ui.autocomplete.js',
              'build/visualsearch.js'],
        dest: "build/visualsearch-complete.js"
      }
    },
    uglify: {
      production: {
        options: {
          mangle: true,
          compress: true,
          beautify: false
        },
        files: {
          "build-min/visualsearch-complete.min.js": "build/visualsearch-complete.js"
        }
      }
    }
  });

  // Load NPM tasks
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-concat");

  // Default task(s).
  grunt.registerTask("default", ["concat", "uglify"]);

};

