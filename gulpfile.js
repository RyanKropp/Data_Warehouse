const gulp = require('gulp');

const cssmin = require('gulp-cssmin')

const rename = require('gulp-rename');

gulp.task('default', async function () {
    gulp.src('css/styles.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});