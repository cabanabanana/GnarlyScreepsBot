module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-screeps');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
        run: {
            npm_build: {
                cmd: 'npm',
                args: ['run', 'build']
            }
        },
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
        },
        watch: {
            build: {
                files: ['**/*.ts', '**/*.d.ts'],
                tasks: ['run:npm_build']
            }
        }
  });
}