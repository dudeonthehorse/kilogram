var gulp = require('gulp');
var runSequence = require('run-sequence');

// Default task
gulp.task('default', function(cb) {
	runSequence(
		'clean',
		'concatcss',
		['nunjucks','nunjucksCopyCss'],
		[ 'inliner', 'images'],
		'watch',
		cb
	);
});

