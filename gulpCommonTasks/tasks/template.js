var gulp = require('gulp');
var config = require('../config').template;
var inlineCss = require('gulp-inline-css');
var htmlmin = require('gulp-htmlmin');
var notify = require("gulp-notify");
var nunjucksRender = require('gulp-nunjucks-render');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').get('sync');
var typograf = require('gulp-typograf');
var markdown = require('nunjucks-markdown');
var marked = require('marked');

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
		.pipe(inlineCss({
			removeLinkTags: true,
			preserveMediaQueries: true,
			xmlMode: true
		}))
        /*.pipe(typograf({
            lang: 'ru',
            mode: 'digit'
        }))*/
		/*.pipe(htmlmin({
			minifyCSS: true,
			collapseWhitespace: true,
			processConditionalComments: false,
			keepClosingSlash: true
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
