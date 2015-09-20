var gulp = require('gulp');
var config  = require('../config').inliner;
var inlineCss = require('gulp-inline-css');
var fileinclude = require('gulp-file-include');


gulp.task('inliner', function() {
	return gulp.src(config.src)
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(inlineCss({
			preserveMediaQueries: true
		}))
		.pipe(gulp.dest(config.dest));
});
