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
var utm  = require('gulp-utm2html');

gulp.task('template', function() {
	var env = nunjucksRender.nunjucks.configure([config.cwd], {
		watch: false,
		breaks: true
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

	markdown.register(env, marked);

	return gulp.src(config.src, {
			cwd: config.cwd
		})
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(nunjucksRender())
		.pipe(typograf({ locale: ['ru', 'en-US'] }))
		.pipe(kinky())
		.pipe(inlineCss({
			removeStyleTags: true,
			applyStyleTags: true,
			preserveMediaQueries: true
		}))
		/*.pipe(utm({
			source: config.utm.source,
			medium: config.utm.medium,
			campaign: config.utm.campaign,
			term: config.utm.term,
			content: config.utm.content
		}))*/
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
