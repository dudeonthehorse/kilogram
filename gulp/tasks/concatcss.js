var concat = require('gulp-concat');
var gulp = require('gulp');
var del = require('del');
var config  = require('../config').concatcss;

gulp.task('concatcss', function() {
	return gulp.src(config.src)
		.pipe(concat(config.allFile))
		.pipe(gulp.dest(config.dest));
});

gulp.task('concatcss-del', function(cb) {
	del([config.delStyleCompile], cb);
});
