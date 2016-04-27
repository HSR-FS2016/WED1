var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./website"
        }
    });
    gulp.watch("website/**/*.html").on('change', browserSync.reload);
    gulp.watch("website/**/*.css").on('change', browserSync.reload);
    gulp.watch("website/**/*.js").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
