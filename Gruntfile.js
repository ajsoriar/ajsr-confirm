
'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /*
        watch: {
            scripts: {
                files: [
                    'src/*.js',
                    'src/sass/*.scss'
                ],
                tasks: ['sass'], //,'test'],
                options: {
                    livereload: 9090,
                }
            }
        },
        */

        clean: {
            build: {
                src: ['dist/*.*','src/css/*.css']
            }
        },
        copy: {
            build: {
                files: [{
                    cwd: 'src',
                    src: [
                        '*.js' //,
                        //'*.css'
                    ],
                    dest: 'dist',
                    expand: true
                },{
                    cwd: 'src/css',
                    src: [
                        //'*.js',
                        '*.css'
                    ],
                    dest: 'dist/css',
                    expand: true
                }
                // ,{
                //     cwd: 'src/images',
                //     src: [
                //         '*.js',
                //         '*.css'
                //     ],
                //     dest: 'dist/templates/',
                //     expand: true  
                // }
                ]
            }
        },
        uglify: {
            options: {
                preserveComments: 'some', // will preserve all comments that start with a bang (!) or include a closure compiler style directive (@preserve)
                mangle: false, // false to prevent changes to your variable and function names.
                compress: {
                    drop_console: true
                }
            },
            my_target: {
                files: {
                    'dist/ajsrConfirm.min.js': ['dist/ajsrConfirm.js']
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                }
                /*
                ,
                files: { // Dictionary of files
                    //'src/ajsrConfirm.css': 'src/sass/ajsrConfirm.scss'
                }
                */


            }
        },
        compass: {
            dist: {
                config: {
                    config: 'src/compass/config.rb'
                },
                options: {
                    sassDir: 'src/compass/sass',
                    cssDir: 'src/css'
                }
            }
        }


/*
        ,
        karma: {
            unit: {
                configFile: 'tests/karma.conf.js',
                singleRun: true
            }
        }
*/
    });

    // Include functionality
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Define tasks
    //grunt.registerTask('default', ['watch']);
    //grunt.registerTask('dev', ['watch']);
    //grunt.registerTask('compass', ['compass']);
    //grunt.registerTask('build', ['sass','clean', 'copy', 'uglify']);
    grunt.registerTask( 
        'build',
        'Compiles all of the assets and files to dist directory.',
        ['clean', 'compass', 'copy', 'uglify', 'cssmin']
    );
    //grunt.registerTask('test', ['karma']);
    //grunt.registerTask('default', ['sass']);
    //grunt.registerTask('clean', ['clean']);
};
