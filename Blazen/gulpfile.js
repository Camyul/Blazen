const gulp = require('gulp');
const rimraf = require('rimraf');
const minify = require('gulp-minify');

const paths = {
    //webroot: './js/'
};

paths.minJsDest = './minJS/script.min.js';
paths.jsDest = './script.js';

//Clean vendors JS
gulp.task('cleanJs:js', function(cb) {
    rimraf(paths.minJsDest, cb);
});

gulp.task('minifyingJs:js', function() {
    // path to your files
    gulp.src(paths.jsDest)
        // concat files
        .pipe(minify())
        // Writing files to Destination
        .pipe(gulp.dest(paths.minJsDest));
});

gulp.task("cleanAndMin", ["cleanJs:js"], function() {
    gulp.src(paths.jsDest)
        // concat files
        .pipe(minify())
        // Writing files to Destination
        .pipe(gulp.dest(paths.minJsDest));
});

gulp.task('default', ['cleanAndMin']);
