'use strict';

var gulp = require('gulp');
var bower = require('gulp-bower');

module.exports = function (options) {
    gulp.task('bower', [], function () {
        return bower({ cmd: 'install'});
    });
};