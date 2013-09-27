module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-regarde');
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.initConfig({
    distdir:'css',
    pkg:'<json:package.json>',
    paths:{
      less:['less/*.less']
    },

    connect: {
      server:{
        options:{
          port:8080,
          base:'dist'        
        }
      }
    },
    
    less: {
      development: {
        options: {
          paths: ["less"]
        },
        files: {
          "css/screen.css": "less/screen.less"
        }
      }  
    },

    coffee:{
      compile: {
        files: {
          'js/application.js': ['coffee/data.coffee','coffee/application.coffee']
        }
      }
    },

    regarde:{
      less:{
        files:"<%=paths.less%>",
        tasks:["less"]
      },
      coffee: {
        files:"coffee/*.coffee",
        tasks:["coffee"]
      },
      livereload:{
        files:['css/*','*.html', 'js/*'],
        tasks:['livereload']
      }
    }

  });

  grunt.registerTask('build', ['less','coffee']);
  grunt.registerTask('dev', ['build', 'livereload-start','regarde'])
  grunt.registerTask('server', ['build' ,'connect', 'livereload-start', 'regarde'])

};