var gulp = require('gulp');
var del = require('del');
var runSequence = require('run-sequence');
var config  = require('../config');

gulp.task('clean', function() {
	runSequence(
		['concatcss-del', 'build-del']
	);
});

gulp.task('build-del', function(cb) {
	del([config.build], cb);
});
