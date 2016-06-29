module.exports = function(grunt) {
    "use strict";
    
    // Get dependencies
    require('load-grunt-tasks')(grunt);

    // Include package file to access info
    var appPackage = require('./package.json');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    port: 9001,
                    livereload: true,
                    open: {
                        target: 'http://localhost:9001'
                    },
                    base: 'dist'
                }
            }
        },

        less: {
            build: {
                files: {
                    'dist/styles.css': 'src/styles.less'
                }
            }
        },

        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['src/*.less'],
                tasks: ['less']
            },
            html: {
                files: ['dist/*.html']
            }
        }

    });

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['connect:server', 'watch']);


};