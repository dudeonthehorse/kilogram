var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('default', function(cb) {
	runSequence(
		'concatcss',
		[ 'inliner', 'images'],
		cb
	);
});