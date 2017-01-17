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

    // Pug
    pug = require('gulp-pug')
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

function swallowError (error) {

    // If you want details of the error in the console
    console.log(error.toString())

    this.emit('end')
}

// watch & build Semantic UI
gulp.task('semantic-watch', watch);
gulp.task('semantic-build', build);

// watch & build Pug
gulp.task('pug-watch', function () {
    gulp.watch('views/**/*.pug', ['pug-build'])
});

gulp.task('pug-build', function buildHTML() {
    return gulp.src('views/**/*.pug')
        .pipe(pug({
            pretty: true
        })).on('error', swallowError).pipe(gulp.dest('./dist/'))
});

gulp.task('build-ui', ['semantic-build', 'pug-build']);
gulp.task('develop', ['semantic-watch', 'pug-watch']);

gulp.task('browser-sync', function () {
    browserSync.init(browserSyncConfig);
    gulp.watch("./ui/src/themes/uai/**/*.less", ['simple-build-css']);
    gulp.watch("./ui/src/themes/uai/**/*.overrides", ['simple-build-css']);
    gulp.watch('views/**/*.pug', ['pug-build']);
    gulp.watch(["dist/*.html", 'dist/*.css']).on('change', browserSync.reload);
});