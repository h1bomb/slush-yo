/*
 * slush-yo
 * https://github.com/h1bomb/slush-yo
 *
 * Copyright (c) 2014, Arvind Ravulavaru
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename');

gulp.task('default', function(done) {
    gulp.src(__dirname + '/templates/static/**')
        .pipe(rename(function(file) {
            if (file.basename.indexOf('__') == 0) {
                file.basename = '.' + file.basename.slice(2);
            }
        }))
        .pipe(conflict('./'))
        .pipe(gulp.dest('./'));
});