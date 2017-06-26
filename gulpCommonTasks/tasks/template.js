var config = require('../config').template;
var gulp = require('gulp');
var browserSync = require('browser-sync').get('sync');
var htmlmin = require('gulp-htmlmin');
var inlineCss = require('gulp-inline-css');
var kinky = require('kinky');
var less = require('gulp-less');
var notify = require("gulp-notify");
var nunjucksRender = require('gulp-nunjucks-render');
var plumber = require('gulp-plumber');
var marked = require('marked');
var markdown = require('nunjucks-markdown');
var path = require('path');
var typograf = require('gulp-typograf');

gulp.task('template', function() {
	var env = nunjucksRender.nunjucks.configure([config.cwd], {
		watch: false
	});

	env.addFilter('limit', function (input, limit) {
		if (typeof limit !== 'number') {
			return input;
		}
		if (typeof input === 'string') {
			if (limit >= 0) {
				return input.substring(0, limit);
			} else {
				return input.substr(limit);
			}
		}
		if (Array.isArray(input)) {
			limit = Math.min(limit, input.length);
			if (limit >= 0) {
				return input.slice(0, limit);
			} else {
				return input.slice(input.length + limit, input.length);
			}
		}
		return input;
	});

	markdown.register(env, marked.setOptions({
		breaks: true
	}));

	return gulp.src(config.src, {
			cwd: config.cwd
		})
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(nunjucksRender())
		.pipe(typograf({ locale: ['en-US', 'ru'] }))
		.pipe(kinky())
		.pipe(inlineCss({
			removeStyleTags: false,
			applyStyleTags: false,
			removeLinkTags: true,
			applyLinkTags: true,
			preserveMediaQueries: true
		}))
		.pipe(notify({
			title: 'Kilogram',
			message: "Boooya! I'm done!",
			sound: "Pop"
		}))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({
			stream: true
		}));
});
