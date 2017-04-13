'use strict';

var bundleTask = ["concat:visualsearch", "concat:bundle", "uglify"]
module.exports = function(grunt) {
  // Project Configuration
  grunt.initConfig({
    watch: {
      dist: {
        files: ['lib/js/**/*.js'],
        tasks: bundleTask
      }
    },
    concat: {
      visualsearch: {
        src: ['lib/js/visualsearch.js',
              'lib/js/views/search_box.js',
              'lib/js/views/search_facet.js',
              'lib/js/views/search_input.js',
              'lib/js/utils/backbone_extensions.js',
              'lib/js/utils/hotkeys.js',
              'lib/js/utils/inflector.js',
              'lib/js/utils/jquery_extensions.js',
              'lib/js/utils/search_parser.js',
              'lib/js/models/search_facets.js',
              'lib/js/models/search_query.js',
              'lib/js/templates/templates.js'],
        dest: "build/visualsearch.js"
      },
      bundle: {
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
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task(s).
  grunt.registerTask("default", ["watch"]);

};

