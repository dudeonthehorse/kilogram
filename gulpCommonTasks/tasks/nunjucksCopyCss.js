var gulp = require('gulp');
var config = require('../config').nunjucks;

gulp.task('nunjucksCopyCss', function () {
	return gulp.src(config.srcCSS, {cwd: config.cwd})
		.pipe(gulp.dest(config.destCSS));
});


