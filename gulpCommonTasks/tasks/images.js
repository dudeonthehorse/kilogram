var gulp = require('gulp');
var config  = require('../config').images;


gulp.task('images', function () {
	return gulp.src(config.src, {cwd: config.cwd})
		.pipe(gulp.dest(config.dest));
});


