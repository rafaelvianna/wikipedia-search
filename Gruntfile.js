module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['src/tags/**/*.tag'],
        tasks: ['default'],
        options: {
          reload: true
        }
      }
    },

    riot: {
      options: {
        concat: true
      },
      dist: {
        src: 'src/tags/**/*.tag',
        dest: 'app/assets/js/tags.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-riot');

  grunt.registerTask('default', ['riot']);
};
