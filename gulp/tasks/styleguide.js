var gulp      = require('gulp');
var frontnote = require('gulp-frontnote');
var config    = require('../config').styleguide;
var browserSync  = require('browser-sync');

gulp.task('styleguide', ['sass'], function() {
  // Copyt builded css file
  gulp.src('./dist/rigging.css')
    .pipe(gulp.dest(config.options.out));

  // Create styleguide with gulp-frontnote
  gulp.src(config.src)
    .pipe(frontnote(config.options));

  browserSync.reload({stream:true})
});
