var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('default', function(cb) {
	runSequence(
		'compile-less',
		'concatcss',
		[ 'inliner', 'images'],
		'watch',
		cb
	);
});

