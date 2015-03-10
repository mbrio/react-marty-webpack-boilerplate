'use strict';

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-copy');

  var environment = process.env.NODE_ENV || 'development';
  var webpackConfig = require('./webpack.' + environment + '.config.js');

  grunt.initConfig({
    webpack: {
      config: webpackConfig
    },
    copy: {
      assets: {
        files: [
          {
            expand: true,
            src: '**',
            cwd: 'src/assets/',
            dest: 'build/'
          }
        ]
      }
    }
  });

  grunt.registerTask('build:assets', [
    'copy:assets'
  ]);

  grunt.registerTask('build:js', [
    'webpack'
  ]);

  grunt.registerTask('build', [
    'build:assets',
    'build:js'
  ]);

  grunt.registerTask('default', ['build']);

  // TODO: ADD CLEAN
  // TODO: ADD SERVER
}