var gulp = require('gulp');
var config = require('../config').template;
var inlineCss = require('gulp-inline-css');
var htmlmin = require('gulp-htmlmin');
var notify = require("gulp-notify");
var nunjucksRender = require('gulp-nunjucks-render');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').get('sync');
var markdown = require('nunjucks-markdown');
var marked = require('marked');
var inky = require('inkypad');
var gdest = require('gulp-dest');

gulp.task('template', function() {
	var env = nunjucksRender.nunjucks.configure([config.cwd], {
		watch: false
	});

	markdown.register(env, marked);

	return gulp.src(config.src, {
			cwd: config.cwd
		})
		.pipe(plumber({
			errorHandler: notify.onError("Error: <%= error.message %>")
		}))
		.pipe(nunjucksRender())
		.pipe(inky())
		.pipe(inlineCss({
			removeLinkTags: true,
			preserveMediaQueries: true,
			xmlMode: true
		}))
		/*.pipe(htmlmin({
			minifyCSS: true,
			collapseWhitespace: true,
			processConditionalComments: false,
			keepClosingSlash: true
		}))*/
		.pipe(notify({
			title: 'Kilopad',
			message: "Done!",
			sound: "Pop"
		}))
		.pipe(gulp.dest(config.dest))
		// .pipe(gdest({ext: '.tpl'}))
		// .pipe(gulp.dest('../customs/eventreg/'))
		.pipe(browserSync.reload({
			stream: true
		}));
});
