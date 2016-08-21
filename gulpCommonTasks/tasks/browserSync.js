var gulp = require('gulp');
var config  = require('../config');
var browserSync = require('browser-sync').create('sync');

gulp.task('browserSync', function() {
	browserSync.init({
		ui: false,
		notify: false,
		server: {
			baseDir: config.build,
			directory: true
		}
	});
});
