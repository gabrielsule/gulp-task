var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    concatCss = require('gulp-concat-css'),
    minifyCSS = require('gulp-minify-css');

gulp.task('concatcss', function () {
    gulp.src('css/source/*.css')
        .pipe(concatCss('hb.min.css'))
        .pipe(gulp.dest('css/temp/'))
});

gulp.task('minifycss', function () {
    gulp.src('css/temp/hb.min.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('concatjs', function () {
    gulp.src('js/source/*.js')
        .pipe(concat('hb.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'))
});