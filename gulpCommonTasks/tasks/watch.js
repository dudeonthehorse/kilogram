var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../config');

gulp.task('watch', function () {
	gulp.watch(config.concatcss.src, { cwd: config.concatcss.cwd }, ['build']);
	gulp.watch(config.inliner.src, { cwd: config.inliner.cwd }, ['build']);
	gulp.watch(config.inliner.src, { cwd: config.inliner.cwd + '/partials' }, ['build']);
	gulp.watch(config.images.src, { cwd: config.images.cwd }, ['images']);
});

gulp.task('build', function(cb) {
	runSequence(
		'concatcss',
		'nunjucksCopyCss',
		'nunjucks',
		'inliner',
		cb
	);
});
