/*******************************
            Set-up
*******************************/

var
  gulp         = require('gulp-help')(require('gulp')),

  // read user config to know what task to load
  config       = require('./ui/semantic/tasks/config/user'),

  // watch changes
  watch        = require('./ui/semantic/tasks/watch'),

  // build all files
  build        = require('./ui/semantic/tasks/build'),
  buildJS      = require('./ui/semantic/tasks/build/javascript'),
  buildCSS     = require('./ui/semantic/tasks/build/css'),
  buildAssets  = require('./ui/semantic/tasks/build/assets'),

  // utility
  clean        = require('./ui/semantic/tasks/clean'),
  version      = require('./ui/semantic/tasks/version'),

  // docs tasks
  serveDocs    = require('./ui/semantic/tasks/docs/serve'),
  buildDocs    = require('./ui/semantic/tasks/docs/build'),

  // rtl
  buildRTL     = require('./ui/semantic/tasks/rtl/build'),
  watchRTL     = require('./ui/semantic/tasks/rtl/watch')
;


/*******************************
             Tasks
*******************************/

gulp.task('default', false, [
  'watch'
]);

gulp.task('watch', 'Watch for site/theme changes', watch);

gulp.task('build', 'Builds all files from source', build);
gulp.task('build-javascript', 'Builds all javascript from source', buildJS);
gulp.task('build-css', 'Builds all css from source', buildCSS);
gulp.task('build-assets', 'Copies all assets from source', buildAssets);

gulp.task('clean', 'Clean dist folder', clean);
gulp.task('version', 'Displays current version of Semantic', version);

/*--------------
      Docs
---------------*/

/*
  Lets you serve files to a local documentation instance
  https://github.com/Semantic-Org/Semantic-UI-Docs/
*/

gulp.task('serve-docs', 'Serve file changes to SUI Docs', serveDocs);
gulp.task('build-docs', 'Build all files and add to SUI Docs', buildDocs);


/*--------------
      RTL
---------------*/

if(config.rtl) {
  gulp.task('watch-rtl', 'Watch files as RTL', watchRTL);
  gulp.task('build-rtl', 'Build all files as RTL', buildRTL);
}
