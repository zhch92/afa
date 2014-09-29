module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {},
            files: ['Gruntfile.js', 'build/js/**/*.js']
        },
        // concat: {
        //     options: {
        //         separator: ''
        //     },
        //     dist: {
        //         src: ['build/js/**/*.js'],
        //         dest: 'js/<%= pkg.name %>.js'
        //     }
        // },
        // uglify: {
        //     options: {
        //         banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        //     },
        //     dist: {
        //         files: {
        //             'js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        //         }
        //     }
        // },
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
                    src: ['**/*.jade','!index.jade','!_partial'],
                    dest: 'view',
                    ext: '.html'
                }]
            }
        },
        watch: {
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

    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jade');

    //grunt.loadNpmTasks('grunt-contrib-qunit');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    //grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('default', ['jshint', 'sass', 'jade', 'watch']);
};