var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var w3cjs = require('gulp-w3cjs');
var notify = require("gulp-notify");
var plumber = require('gulp-plumber');

gulp.task('validate-html', function () {
	gulp.src('website/**/*.html')
		.pipe(w3cjs())
		.pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
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




gulp.task('default', ['validate-html','serve']);
