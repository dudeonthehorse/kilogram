var gulp = require('gulp');
var config = require('../config').template;
var inlineCss = require('gulp-inline-css');
var htmlmin = require('gulp-htmlmin');
var notify = require("gulp-notify");
var nunjucksRender = require('gulp-nunjucks-render');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').get('sync');

gulp.task('template', function() {
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
		.pipe(inlineCss({
			removeLinkTags: false,
			preserveMediaQueries: true,
			xmlMode: true
		}))
		.pipe(htmlmin({
			minifyCSS: true,
			collapseWhitespace: true,
			processConditionalComments: false,
			keepClosingSlash: true
		}))
		.pipe(notify({
			title: 'Email',
			message: 'Build Done',
			sound: "Pop"
		}))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});
