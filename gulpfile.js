/**
 *  Welcome to your gulpfile!
 *  The gulp tasks are split in several files in the gulp directory
 *  because putting all here was really too long
 */

'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
var ts = require('gulp-typescript');

gulp.task('typescript', function() {
  console.log('Compiling typescript');
  return gulp.src(['server/**/*.ts'])
      .pipe(ts({module: 'commonjs'})).js.pipe(gulp.dest('./.tmp/'))
});

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file);
});


/**
 *  Default task clean temporaries directories and launch the
 *  main optimization build task
 */
gulp.task('default', function () {
  gulp.start('build');
});

gulp.task('heroku:prod', ['default'], function(){
  console.log('heroku production');
});
