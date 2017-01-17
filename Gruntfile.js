// Grunt is used if working with Foundation

/**
 * Grunt Module
 */

module.exports = function(grunt){
  // Running time statistic
  require('time-grunt')(grunt);
  require('jit-grunt')(grunt);

  /**
   * Configuration
   */
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // DIRECTORIES
    sassDir: "scss",
    cssDir: "css",
    jsDir: "js",
    htmlDir: "html",
    pugDir: "html/views",
    proxy: "localhost",

    /*
     * Create a dynamic build header.
     */
    banner: '/*!\n' +
    ' * <%= pkg.author.name %>\n' +
    ' * <%= pkg.author.url %>\n' +
    ' * <%= pkg.title %>\n' +
    ' * <%= grunt.template.today("dd-mm-yyyy-hh:MM:ss") %>\n' +
    ' * @author <%= pkg.author.name %>\n' +
    ' * @version <%= pkg.version %>\n' +
    ' */\n',

    sass: {
      options: {
        // If you can't get source maps to work, run the following command in your terminal:
        // $ sass scss/foundation.scss:css/foundation.css --sourcemap
        // (see this link for details: http://thesassway.com/intermediate/using-source-maps-with-sass )
        sourceMap: true
      },

      dev: {
        options: {
          outputStyle: 'nested'
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      },

      dist: {
        options: {
          outputStyle: 'compact'
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }
      }
    },

    pug: {
      compile: {
        options: {
          pretty: true
        },
        files: [{
          expand: true,
          cwd: '<%= pugDir %>',
          src: [ '**/*.pug',  '!**/_*.pug'],
          dest: '<%= htmlDir %>',
          ext: '.html'
        }]
      }
    },

    htmlhint: {
      build: {
        options: {
          'tag-pair': true,
          // Force tags to have a closing pair
          'tagname-lowercase': true,
          // Force tags to be lowercase
          'attr-lowercase': false,
          // Force attribute names to be lowercase e.g. <div id="header"> is invalid
          'attr-value-double-quotes': true,
          // Force attributes to have double quotes rather than single
          'doctype-first': true,
          // Force the DOCTYPE declaration to come first in the document
          'spec-char-escape': true,
          // Force special characters to be escaped
          'id-unique': true,
          // Prevent using the same ID multiple times in a document
          'head-script-disabled': false,
          // Prevent script tags being loaded in the  for performance reasons
          'style-disabled': true
          // Prevent style tags. CSS should be loaded through
        },
        src: ['<%= htmlDir %>/*.html']
      }
    }, //htmlhint end

    modernizr: {
      dist: {
        "crawl": false,
        "customTests": [],
        "dest": "<%= jsDir %>/vendor/modernizr/modernizr.js",
        "tests": [
          "htmlimports",
          "ie8compat",
          "input",
          "inputtypes",
          "svg",
          "touchevents",
          "bgpositionxy",
          [
            "bgrepeatspace",
            "bgrepeatround"
          ],
          "bgsizecover",
          "borderradius",
          "boxshadow",
          "boxsizing",
          "csscalc",
          "fontface",
          "cssgradients",
          "textshadow",
          "csstransforms",
          "csstransforms3d",
          "csstransitions",
          "capture",
          "fileinput",
          "directory",
          "formattribute",
          "localizednumber",
          "placeholder",
          "requestautocomplete",
          "formvalidation",
          "svgasimg",
          "svgclippaths",
          "svgfilters",
          "svgforeignobject",
          "inlinesvg",
          "smil"
        ],
        "options": [
          "setClasses"
        ],
        "uglify": true
      }
    },




    /**
     * Bower Copy
     * https://www.npmjs.com/package/grunt-bowercopy
     * Scrupulously manage file locations for bower dependencies.
     */
    bowercopy: {
      options: {
        srcPrefix: 'bower_components'
      },
      scripts: {
        options: {
          destPrefix: '<%= jsDir %>/vendor'
        },
        files: {
          'jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
          //'jquery/jquery-ie.min.js': 'jquery-ie/dist/jquery.min.js',
          'slick/slick.min.js': 'slick-carousel/slick/slick.min.js',
          //'jquery.imagemapster.min.js': 'ImageMapster/dist/jquery.imagemapster.min.js',
          //'jquery-ie/jquery.min.js': 'jquery-ie/dist/jquery.min.js',
          //'modernizr/modernizr.js': 'modernizr/modernizr.js',

          // FOUNDATION SCRIPTS
          'foundation/foundation.min.js': 'foundation/dist/js/foundation.min.js',

          // Object-fit-images
          // This adds support for object-fit and object-position to IEdge 9-13, Android 4.4-, Safari (OSX 9.1-, iOS 9.3-) and skips browsers that already support them.
          'object-fit-images/ofi.browser.js': 'object-fit-images/dist/ofi.browser.js',

          //'categorizr/categorizr.min.js': 'categorizr.js/categorizr.min.js',
          //'qtransform/qtransform.js': 'QTransform/QTransform.js',
          //'waypoints/waypoints.min.js': 'waypoints/lib/jquery.waypoints.min.js',
          //'bxslider/bxslider.min.js': 'bxslider-4/dist/jquery.bxslider.min.js',
          //'fancybox/fancybox.js': 'fancybox/source/jquery.fancybox.pack.js',
          //'masonry/masonry.pkgd.min.js': 'masonry/dist/masonry.pkgd.min.js',


          /**
           * The HTML5 Shiv enables use of HTML5 sectioning elements in legacy Internet Explorer
           * and provides basic HTML5 styling for Internet Explorer 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x.
           */
          //'html5shiv/html5shiv.min.js': 'html5shiv/dist/html5shiv.min.js'

          /**
           * A fast & lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)
           */
          //'respond/respond.min.js': 'respond/dest/respond.min.js',

          /**
           * selectivizr is a JavaScript utility that emulates CSS3 pseudo-classes
           * and attribute selectors in Internet Explorer 6-8. Simply include the script
           * in your pages and selectivizr will do the rest.
           */
          //'selectivizr/selectivizr.js': 'selectivizr/selectivizr.js',

          /**
           * A fast CSS selector engine and matcher.
           */
          //'nwmatcher/nwmatcher.js': 'nwmatcher/src/nwmatcher.js',

          /**
           * Give the best style for your select. :)
           * https://github.com/3runoDesign/SelectFX.js
           * https://libraries.io/bower/selectfx.js
           */
          //'selectfx/selectfx.min.js': 'selectfx.js/dist/js/query_selectfx.min.js',

          /**
           * https://github.com/Prinzhorn/skrollr
           * Stand-alone parallax scrolling JavaScript library for mobile (Android, iOS, etc.) and desktop in about 12k minified.
           */
          //'skrollr/skrollr.min.js': 'skrollr/dist/skrollr.min.js',

          /**
           * tablesorter (FORK) is a jQuery plugin for turning a standard HTML table with THEAD
           * and TBODY tags into a sortable table without page refreshes. tablesorter can successfully
           * parse and sort many types of data including linked data in a cell. This forked version adds
           * lots of new enhancements including: alphanumeric sorting, pager callback functons, multiple
           * widgets providing column styling, ui theme application, sticky headers, column filters and
           * resizer, as well as extended documentation with a lot more demos.
           *
           * https://github.com/Mottie/tablesorter
           */
          //'tablesorter/jquery.tablesorter.min.js': 'tablesorter/jquery.tablesorter.min.js'
        }
      },

      styles: {
        options: {
          destPrefix: '<%= sassDir %>/site/vendor'
        },
        files: {
          //'bxslider/jquery.bxslider.scss': 'bxslider-4/dist/jquery.bxslider.css',
          //'normalize/_normalize.scss': 'normalize-css/normalize.css',
          //'fancybox/jquery.fancybox.scss': 'fancybox/source/jquery.fancybox.css'
          'slick/slick.scss': 'slick-carousel/slick/slick.scss'
        }
      }
    }, //bowercopy end

     copy: {
       bximages: {
         expand: true,
         cwd: 'bower_components/bxslider-4/src/images/',
         src: '**',
         dest: 'images/',
         flatten: false, // keeps file structure
         filter: 'isFile'
       }
     },

    postcss: {
          options: {
            map: false,

            processors: [
              require('autoprefixer')({browsers: '> 2%'}), // add vendor prefixes
              require('cssnano')({

                discardComments: {
                  removeAll: true
                }

              }) // minify the result
            ]
          },
          dist: {
            src: 'css/*.css'
          }
        },



    concat: {
      options: {
        separator: ';'
      },

      dist: {
        src: [

          // Include your own custom scripts (located in the custom folder)
          //'js/vendor/fastclick.js',
          //'js/vendor/foundation-select.js',
          //'js/vendor/fancybox.js',
          //'js/custom/*.js'

        ],
        //dest: 'js/app.js'
      }
    },

    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'images/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'images/'                  // Destination path prefix
        }]
      }
    },

    /*penthouse: {
      extract : {
        outfile : 'css/critical.css',
        css : 'css/style.css',
        url : 'http://dswp.dev',
        width : 640,
        height : 480,
        skipErrors : false // this is the default
      },
    }, */

    watch: {
      grunt: {files: ['Gruntfile.js']},

      pug: {
        files: ['<%= pugDir %>/**/*.pug', '!<%= pugDir %>/**/_*.pug'],
        tasks: ['newer:pug', 'newer:htmlhint']
      },

      pug_includes: {
        files: ['<%= pugDir %>/**/_*.pug', '<%= pugDir %>/**/**/_*.pug'],
        tasks: ['buildhtml']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass:dev'],
        options: {
          livereload: false
        }
      }

    },


    browserSync: {
      bsFiles: {
        src : [
          'css/*.css',
          'html/*.html'
        ]
      },
      options: {
        watchTask: true,
        proxy: "<%= proxy %>"
      }
    }


  }); //initConfig end



  /**
   * Default task
   * Run `grunt` on the command line
   */

  grunt.registerTask('default', []);
  grunt.registerTask('watch-sync', ['browserSync', 'watch']);
  grunt.registerTask('build', ['pug', 'bowercopy', 'sass:dist', 'modernizr', 'postcss', 'htmlhint', 'newer:imagemin']); // 'concat', 'copy', 'penthouse'
  grunt.registerTask('buildhtml',  ['pug', 'htmlhint']); // Build all pug to HTML


};
