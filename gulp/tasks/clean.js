var gulp = require('gulp');
var runSequence = require('run-sequence');
var config  = require('../config');

// Default task
gulp.task('clean', function(cb) {
	runSequence(
		['concatcss-del', 'build-del'],
		cb
	);
});

gulp.task('build-del', function(cb) {
	del([config.build], cb);
});
