var gulp = require('gulp'),
	webserver = require('gulp-webserver'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish');

gulp.task('serve', function (){
	return gulp.src ('src')
		.pipe(webserver({
			host: 'localhost',
			port: 8000,
			livereload: true,
			directoryListing: false
		}));
});

gulp.task('lint', function() {
  return gulp.src('src/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter(stylish));
});	



gulp.task('default', ['serve']);