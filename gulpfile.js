var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var w3cjs = require('gulp-w3cjs');
var jade = require('gulp-jade');
var watch = require('gulp-watch');
var filesToMove = [
        './website/assets/**/*.*',
				'./website/calculator/**/*.*'
    ];
var clean = require('gulp-clean');

gulp.task('validate-html', function () {
	gulp.src('dist/**/*.html')
		.pipe(w3cjs())
});

gulp.task('templates', function() {
  return gulp.src('./website/index.jade')
    .pipe(jade({}))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('move-files', function() {
	return gulp.src(filesToMove, { base: './website/' })
  .pipe(gulp.dest('./dist'));
});

gulp.task('jade-watch', ['templates','reload']);
gulp.task('css-watch', ['move-files','reload']);
gulp.task('js-watch', ['move-files','reload']);

gulp.task('reload', ['templates'], function() {
    browserSync.reload();
});

gulp.task('serve',['templates'], function() {
  gulp.src(filesToMove, { base: './website/' })
  .pipe(gulp.dest('./dist'));
	browserSync.init({
			server: {
					baseDir: "./dist"
			}
	});
	gulp.watch('./website/**/*.jade', ['jade-watch']);
	gulp.watch('./website/**/*.css',['css-watch']);
  gulp.watch('./website/**/*.js',['js-watch']);
});

gulp.task('default', ['validate-html','serve']);
