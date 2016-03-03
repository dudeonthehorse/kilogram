var gulp = require('gulp');
var notify = require("gulp-notify");
var config = require('../config').nunjucks;
var nunjucksRender = require('gulp-nunjucks-render');
var plumber = require('gulp-plumber');

gulp.task('nunjucks', function() {
	nunjucksRender.nunjucks.configure([config.cwd], {
		watch: false
	});
	return gulp.src(config.src, {
			cwd: config.cwd
		})
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(nunjucksRender())
		.pipe(gulp.dest(config.dest));
});
