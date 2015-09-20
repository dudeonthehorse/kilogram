var gulp = require('gulp');
var config  = require('../config').images;


gulp.task('images', function () {
	return gulp.src(config.src)
		.pipe(gulp.dest(config.dest));
});


