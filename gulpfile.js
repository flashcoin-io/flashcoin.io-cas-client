"use strict";

var gulp = require("gulp");
var run = require('gulp-run');
var merge = require('merge-stream');
var rename = require('gulp-rename');

gulp.task('bundle-js', function () {
    var cmd = new run.Command('jspm bundle-sfx src/main.js public/assets/js/build.js --minify --skip-source-maps');
    cmd.exec();
});

gulp.task('build-debug-js', function () {
    var cmd = new run.Command('jspm bundle-sfx src/main.js public/assets/js/build.js --skip-source-maps');
    cmd.exec();
});

gulp.task('copy-html', function () {
    return gulp.src('index-prod.html')
        .pipe(rename('index.html'))
        .pipe(gulp.dest('public'));
});

gulp.task('copy-mobile-html', function () {
    return gulp.src('index-mobile-prod.html')
        .pipe(rename('index-mobile.html'))
        .pipe(gulp.dest('public'));
});

gulp.task('copy-favicon', function () {
    return gulp.src('assets/images/pages/coin.png')
        .pipe(rename('favicon.ico'))
        .pipe(gulp.dest('public'));
});

gulp.task('copy-css', function () {
    return gulp.src('assets/css/**/*')
        .pipe(gulp.dest('public/assets/css'));
});

gulp.task('copy-fonts', function () {
    return gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('public/assets/fonts'));
});

gulp.task('copy-images', function () {
    return gulp.src('assets/images/**/*')
        .pipe(gulp.dest('public/assets/images'));
});

gulp.task('copy-lib', function () {
    var maps = [
        {from: 'assets/lib/jquery/**/*', to: 'public/assets/lib/jquery/'},
        {from: 'assets/lib/bootstrap/**/*', to: 'public/assets/lib/bootstrap/'},
        {from: 'assets/lib/bootstrap-datepicker.min.js', to: 'public/assets/lib'},
        {from: 'assets/lib/jquery.simplePagination.js', to: 'public/assets/lib'},
        {from: 'assets/lib/typeahead.jquery.js', to: 'public/assets/lib'}
    ];

    var tasks = maps.map((m) => {
        return gulp.src(m.from).pipe(gulp.dest(m.to));
    });

    merge(tasks);
});

gulp.task('copy-rs', ['copy-html', 'copy-mobile-html', 'copy-css', 'copy-images', 'copy-lib', 'copy-fonts', 'copy-favicon']);

gulp.task('andaman', function(){
    var cmd = new run.Command('browserify src/services/andaman.js -o assets/lib/andaman/andaman-bundle.js --standalone AndamanService');
    cmd.exec();
});

gulp.task('build-debug', ['copy-rs', 'build-debug-js']);
gulp.task('default', ['copy-rs', 'bundle-js']);