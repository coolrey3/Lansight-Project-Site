module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      js: {
        src: ['./js/script.js', './js/script1.js', './js/script2.js', './js/script3.js'],
        dest: 'build/JS/Scripts.js',
      },
      css: {
        src: ['./css/style1.css', './css/style.css'],
        dest: 'build/CSS/Styles.css',
      },

    },
    watch: {
      js: {
        files: ['./JS/**/*.js'],
        tasks: ['concat'],
      },
      css: {
        files: ['./CSS/**/*.css'],
        tasks: ['concat'],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask("default", ['concat', "watch"]);
  grunt.registerTask('speak', function() {
    console.log("im speaking");
  });

};
