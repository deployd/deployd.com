module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      dist: {
        options: {
          paths: ['app/', 'app/bootstrap/less', 'app/less']
        },
        files: {
          'build/less-compiled.css': [
            'app/bootstrap/less/bootstrap.less',
            'app/bootstrap/less/mixins.less',
            'app/less/**/*.less'
          ]
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'build/minified.js': ['app/js/*.js'],
        }
      }
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      js: {
        // the files to concatenate
        src: [
          'app/bower_components/angular/angular.min.js',
          'build/minified.js'
        ],
        // the location of the resulting JS file
        dest: 'public/all.js'
      },
      css: {
        src: [
          'build/less-compiled.css',
          'app/css/prettify.css'
        ],
        dest: 'public/all.css'
      }
    },
    htmlmin: {
      prod: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true
        },
        files: {
          'public/index.html': 'app/templates/index.html'
        }
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'app/',
            src: [
              'favicon.ico',
            ],
            dest: 'public/'
          },
          {
            expand: true,
            cwd: 'app/',
            src: [
              'img/**/*'
            ],
            dest: 'public/'
          },
          {
            expand: true,
            cwd: 'app/bootstrap/',
            src: [
              'font/**/*'
            ],
            dest: 'public/'
          },
          {
            expand: true,
            cwd: 'app/bower_components/angular/',
            src: [
              'angular.min.js.map'
            ],
            dest: 'public/'
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('production', ['uglify', 'less', 'concat', 'copy', 'htmlmin']);
};
