var gulp = require('gulp');
var concatJs = require('gulp-concat');

gulp.task('js', function () {
	return gulp
		.src([
			'./lib/**/*.js',
			'./app/**/*.js'
		])
		.pipe(concatJs('all.js'))
		.pipe(gulp.dest('client-resources'));
});

gulp.task('watch', function () {
	gulp.watch('./app/**/*.js', ['js']);
});