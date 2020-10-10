module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-screeps');

  grunt.initConfig({
      screeps: {
          options: {
              email: '<yer email>',
              password: '<yer password>',
              branch: 'default',
              ptr: false
          },
          dist: {
              src: ['dist/*.js']
          }
      }
  });
}