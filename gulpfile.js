var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create();


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: "app"
        }
    });
});

gulp.task('sass', function () {
    return gulp.src(['./css/**/*.sass','./css/**/*.scss'])
        .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
        .pipe(gulp.dest('./css/'))
    
});

gulp.task('watch', function () {
    gulp.watch(['./css/**/*.sass','./css/**/*.scss'],[sass]);

});

gulp.task('default', ['browserSync'], function () {
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/css/**/*.css', browserSync.reload);
});