var gulp = require('gulp');
var less = require('gulp-less');
var config = require('../config').less;

gulp.task('compile-less', function () {
	gulp.src(config.file)
		.pipe(less())
		.pipe(gulp.dest(config.dest));
});