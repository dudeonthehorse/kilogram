var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

var config  = require('../config').images;


gulp.task('images', function () {
	return gulp.src(config.src, {cwd: config.cwd})
		.pipe( cache(imagemin({
				interlaced: true
			})))
		.pipe( gulp.dest(config.dest) );
});


