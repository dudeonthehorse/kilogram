var path = require('path');
var concat = require('gulp-concat');
var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var config  = require('../config').concatcss;

gulp.task('concatcss', function() {
	return gulp.src(config.src, {cwd: config.cwd})
		.pipe(concat(config.allFile))
        .pipe(less())
		.pipe(gulp.dest(config.dest));
});

gulp.task('concatcss-del', function(cb) {
	del([path.join(config.dest, config.allFile)], cb);
});
