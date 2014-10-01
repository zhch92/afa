module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    express: {
      all: {
        options: {
          port: 8080,
          hostname: "192.168.2.124",
          bases: ['.'],
          livereload: true
        }
      }
    },
    open: {
      all: {
        path: 'http://192.168.2.124:8080/index.html'
      }
    },
    jshint: {
      files: ['Gruntfile.js', 'build/js/**/*.js']
    },
    sass: {
      base: {
        options: {
          banner: "/*font end base.css*/"
        },
        files: {
          'css/global.css': 'build/sass/global.scss',
          'css/pro.min.css': 'build/sass/pro.scss',
          'css/index.css': 'build/sass/index.scss',
          'css/manager.css': 'build/sass/manager.scss',
          'css/user.css': 'build/sass/user.scss',
          'css/knowledge.css': 'build/sass/knowledge.scss',
          'css/equipment.css': 'build/sass/equipment.scss',
          'css/team.css': 'build/sass/team.scss',
          'css/afa_index.css': 'build/sass/afa_index.scss',
          'css/find_line.css': 'build/sass/find_line.scss',
          'css/share.css': 'build/sass/share.scss'
        }
      },
      sassfile:{
        options:{
            style:'expanded',
            debugInfo:true,
            lineNumbers:true
        },
        expand:true,
        cwd:'./build/sass/',
        src:['*.scss'],
        dest:'./css/',
        ext:'.css'
      }

    },
    jade: {
      indexfile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          'index.html': 'build/view/index.jade'
        }
      },
      mainfile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: [{
          expand: true,
          cwd: 'build/view',
          src: ['**/*.jade', '!index.jade', '!_partial'],
          dest: 'view',
          ext: '.html'
        }]
      }
    },
    watch: {
      all: {
        files: ['**/*.html', '**/*.css', '**/*.js'],
        options: {
          livereload: true
        }
      },
      sass: {
        files: ['build/sass/**/*.scss'],
        tasks: ['sass']
      },
      jade: {
        files: ['build/view/**/*.jade'],
        tasks: ['jade']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-open');
  grunt.registerTask('default', ['jshint', 'sass', 'jade', 'watch']);
  grunt.registerTask('server', ['express', 'open', 'watch']);
};