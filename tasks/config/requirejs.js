/**
 * Optimize RequireJS projects using r.js
 *
 * ---------------------------------------------------------------
 *
 * Optimize js in `.tmp/public/js`
 *
 */
module.exports = function(grunt) {

  grunt.config.set('requirejs', {
    build: {
      options: {
        appDir: '.tmp/public/js/',
        baseUrl: './',
        mainConfigFile: '.tmp/public/js/Index.js',
        optimize: 'uglify2',
        // include: [ '**/*' ],
        bundlesConfigOutFile: 'Index.js',
        // keepAmdefine: true,
        dir: '.tmp/public/js/dist',
        modules: [
          {
            name: 'Index',
            // include: ['../bower_components/**/*.js']
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
};
