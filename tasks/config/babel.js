/**
 * Compile JSX files to JavaScript.
 *
 * ---------------------------------------------------------------
 *
 * Compiles jsx files from `assest/js` into Javascript and places them into
 * `.tmp/public/js` directory.
 *
 */
module.exports = function(grunt) {

  grunt.config.set('babel', {
    dev: {
      options: {
        presets: ['es2015', 'react'],
        sourceMap: true
      },
      files: [{
        expand: true,
        cwd: 'assets/js/',
        src: ['**/*.jsx', '*.jsx'],
        dest: '.tmp/public/js/',
        ext: '.js'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-babel');
};
