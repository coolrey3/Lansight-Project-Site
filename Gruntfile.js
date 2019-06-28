module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      js: {
        src: ['./js/script.js', './js/script1.js', './js/script2.js', './js/script3.js'],
        dest: 'build/JS/Scripts.js',
      },
      css: {
        src: ['./css/custom_styles.css', './css/style.css', './css/style.css'],
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
    sass: {
      dist: {
        files:  {'./SASS/style.sass';}{'./build/CSS/sass.css';}
        }
      }


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask("default", ['concat', "watch"]);
  grunt.registerTask('speak', function() {
    console.log("im speaking");
  });

};
