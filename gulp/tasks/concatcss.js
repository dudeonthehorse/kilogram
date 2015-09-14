var concat = require('gulp-concat');
var gulp = require('gulp');
var config  = require('../config').concatcss;



gulp.task('concatcss', function() {
  return gulp.src(config.src)
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(config.dest));
});