var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var w3cjs = require('gulp-w3cjs');
var jade = require('gulp-jade');

gulp.task('validate-html', function () {
	gulp.src('website/**/*.html')
		.pipe(w3cjs())
});

// Static server
gulp.task('serve',['validate-html'], function() {
    browserSync.init({
        server: {
            baseDir: "./website"
        }
    });
    gulp.watch("website/**/*.html",['validate-html',browserSync.reload]);
    gulp.watch("website/**/*.css").on('change', browserSync.reload);
    gulp.watch("website/**/*.js").on('change', browserSync.reload);
});

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./website/index.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./dist/'))
});


gulp.task('default', ['validate-html','serve']);
